import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function NightSkyBackground({ className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create a proper noise texture with better random distribution
    const size = 256;
    const data = new Uint8Array(size * size * 4);
    
    for (let i = 0; i < size * size; i++) {
      const stride = i * 4;
      const r = Math.random();
      const g = Math.random();
      data[stride] = r * 255;
      data[stride + 1] = g * 255;
      data[stride + 2] = Math.random() * 255;
      data[stride + 3] = 255;
    }
    
    const noiseTexture = new THREE.DataTexture(
      data, 
      size, 
      size, 
      THREE.RGBAFormat,
      THREE.UnsignedByteType,
      THREE.UVMapping,
      THREE.RepeatWrapping,
      THREE.RepeatWrapping,
      THREE.LinearFilter,
      THREE.LinearMipMapLinearFilter
    );
    noiseTexture.needsUpdate = true;

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_noise: { value: noiseTexture }
    };

    const targetMouse = { x: 0.5, y: 0.5 };
    const currentMouse = { x: 0.5, y: 0.5 };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_time;
        uniform sampler2D u_noise;
        
        #define PI 3.141592653589793
        #define TAU 6.283185307179586
        
        const float multiplier = 25.5;
        const float zoomSpeed = 10.;
        const int layers = 10;
        const int octaves = 5;

        vec2 hash2(vec2 p) {
          return texture2D(u_noise, (p+0.5)/256.0, -100.0).xy;
        }
        
        mat2 rotate2d(float _angle) {
          return mat2(cos(_angle), sin(_angle), -sin(_angle), cos(_angle));
        }
        
        vec3 hsb2rgb(in vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0);
          rgb = rgb*rgb*(3.0-2.0*rgb);
          return c.z * mix(vec3(1.0), rgb, c.y);
        }
        
        float hash(vec2 p) {
          return texture2D(u_noise, (p+0.5)/256.0, -100.0).x;
        }
        
        float noise(vec2 uv) {
          vec2 id = floor(uv);
          vec2 subuv = fract(uv);
          vec2 u = subuv * subuv * (3. - 2. * subuv);
          float a = hash(id);
          float b = hash(id + vec2(1., 0.));
          float c = hash(id + vec2(0., 1.));
          float d = hash(id + vec2(1., 1.));
          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
        }
        
        float fbm(in vec2 uv) {
          float s = 0.0;
          float m = 0.0;
          float a = 0.5;
          for(int i = 0; i < octaves; i++) {
            s += a * noise(uv);
            m += a;
            a *= 0.5;
            uv *= 2.0;
          }
          return s / m;
        }
        
        vec3 render(vec2 uv, float scale, vec3 baseColour) {
          vec2 id = floor(uv);
          vec2 subuv = fract(uv);
          vec2 rand = hash2(id);
          float bokeh = abs(scale) * 1.0;
          
          float particle = 0.0;
          
          if(length(rand) > 1.3) {
            vec2 pos = subuv - 0.5;
            float field = length(pos);
            particle = smoothstep(0.3, 0.0, field);
            particle += smoothstep(0.4, 0.34 * bokeh, field);
          }
          return vec3(particle * 2.0);
        }
        
        vec3 renderLayer(int layer, vec2 uv, inout float opacity, vec3 baseColour, float n) {
          float scale = mod((u_time + zoomSpeed / float(layers) * float(layer)) / zoomSpeed, -1.0);
          
          // Apply mouse-based offset - particles flow away from mouse (parallax effect)
          vec2 mouseInfluence = (u_mouse - 0.5) * -1.5; // Inverted and scaled down
          float layerDepth = float(layer) / float(layers); // 0.1 to 1.0
          uv += mouseInfluence * layerDepth * 0.3; // Closer layers move more
          
          uv *= 20.0;
          uv *= scale * scale;
          uv = rotate2d(u_time / 10.0) * uv;
          uv += vec2(25.0 + sin(u_time * 0.1)) * float(layer);

          vec3 pass = render(uv * multiplier, scale, baseColour) * 0.2;

          opacity = 1.0 + scale;
          float _opacity = opacity;
          
          float endOpacity = smoothstep(0.0, 0.4, scale * -1.0);
          opacity += endOpacity;

          return pass * _opacity * endOpacity;
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy);

          if(u_resolution.y < u_resolution.x) {
            uv /= u_resolution.y;
          } else {
            uv /= u_resolution.x;
          }
        
          float n = fbm((uv + vec2(sin(u_time * 0.1), u_time * 0.1)) * 2.0 - 2.0);

          vec3 colour = vec3(0.0);
          colour = n * mix(vec3(0.0, 0.5, 1.5), clamp(vec3(1.0, 0.5, 0.25) * 2.0, 0.0, 1.0), n);

          float opacity = 1.0;
          float opacity_sum = 1.0;

          for(int i = 1; i <= layers; i++) {
            colour += renderLayer(i, uv, opacity, colour, n);
            opacity_sum += opacity;
          }

          colour /= opacity_sum;

          gl_FragColor = vec4(clamp(colour * 12.0, 0.0, 1.0), 1.0);
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.x = w;
      uniforms.u_resolution.value.y = h;
    };

    window.addEventListener('resize', handleResize);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // Smooth easing for mouse movement (lerp)
      const ease = 0.05;
      currentMouse.x += (targetMouse.x - currentMouse.x) * ease;
      currentMouse.y += (targetMouse.y - currentMouse.y) * ease;
      
      uniforms.u_mouse.value.x = currentMouse.x;
      uniforms.u_mouse.value.y = currentMouse.y;
      uniforms.u_time.value += 0.016;
      
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      noiseTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ width: '100%', height: '100%', touchAction: 'none' }}
    />
  );
}