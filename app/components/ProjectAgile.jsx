"use client";
import React from "react";
import Image from "next/image";

const ProjectAgile = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-[#1a1a1a] text-white px-6 py-12">
            <h1 className="text-5xl font-extrabold mb-4 text-center">🅿️ Project Agile</h1>
            <p className="text-center text-2xl mb-8 italic text-[#cbd5e1]">
                Futuristic Parkour • Adventure • Combat — Built in Roblox Studio using Luau
            </p>

            <p className='text-[#ADB7BE] text-lg sm:text-xl lg:text-2xl mb-12 max-w-4xl text-center'>
                I created Project Agile with Roblox Studio LuaU using 20,000+ lines of code, and it has over 60,000 views on YouTube.
                At its peak, I led 10+ developers. I utilized Blender for 3D modeling, Adobe After Effects for VFX, Davinci Resolve for
                video editing, and Roblox Studio for the coding. I was one of the co-founders of Agile Studios along with another
                developer who currently studies at UCSC.
            </p>

            <div className="max-w-4xl w-full space-y-10 text-lg leading-relaxed">
                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">📊 Stats</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>🎮 <strong>60K+ Views</strong></li>
                        <li>💬 <strong>200+ Community Members</strong></li>
                        <li>💻 <strong>10K+ Lines of Code</strong></li>
                        <li>⏱️ <strong>200+ Hours of Development</strong></li>
                        <li>👥 <strong>10+ Team Members</strong></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">🎮 Gameplay</h2>
                    <p>
                        Explore a Japanese-inspired, neon-lit cybercity. Play as an escaped prototype cyborg, unravel your identity,
                        and master parkour, combat, and lore-rich quests — solo or with friends. You are a cyborg with a fragmented memory,
                        on the run from a powerful corporation. Use your advanced parkour skills to traverse the city, engage in fast-paced combat, and uncover the truth about your past.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">📖 Lore Highlights</h2>
                    <div className="space-y-2">
                        <p><strong>Crescent Industries</strong> – The massive corporation hiding dark secrets beneath its cutting-edge tech.</p>
                        <p><strong>You (the protagonist)</strong> – An experimental cyborg with fragmented memory, on the run and regaining autonomy.</p>
                        <p><strong>Yoru & Yamato</strong> – Former samurai brothers turned Crescent executives after the Shima Crisis war. Now pawns with forgotten pasts.</p>
                        <p><strong>The Shima Crisis</strong> – A devastating battle where Crescent Industries decimated the peaceful land of Shima, turning its defenders into machines.</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">📸 Sneak Peeks</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><a href="https://drive.google.com/drive/folders/1G1gDSjFK7sCQs1bKrtpSnpvYDifL91EK?usp=sharing" className="text-blue-400 underline" target="_blank">Google Drive (Sneak Videos, Below for GIFs)</a></li>
                        <li><a href="https://i.gyazo.com/f43f2dee1ee291e57f6fee134ee407d4.mp4" className="text-blue-400 underline" target="_blank">Early Combat Demo</a></li>
                        <li><a href="https://gyazo.com/45fecd51d52b7aad18701e6b0041a9a9.mp4" className="text-blue-400 underline" target="_blank">Combat Ability Demo</a></li>
                        
                        <li><a href="https://i.gyazo.com/ad6ad446b60ed12b6bf7a03846934a90.mp4" className="text-blue-400 underline" target="_blank">Parkour Raycasting Preview</a></li>
                        <li><a href="https://i.gyazo.com/12232a4b86de1e0b62e015d24743312d.mp4" className="text-blue-400 underline" target="_blank">Gauntlet Launcher Preview</a></li>
                        <li><a href="https://gyazo.com/e11b8d3475774137851740f35206ce5b.mp4" className="text-blue-400 underline" target="_blank">Gauntlet Slingshot Preview</a></li>
                        
                        <li><a href="https://gyazo.com/f834e39bd7527552e7f517d3b6d6d603.mp4" className="text-blue-400 underline" target="_blank">Gauntlet Swinging Preview</a></li>
                        <li><a href="https://i.gyazo.com/fc464cbddf9fa055e81745846168398a.mp4" className="text-blue-400 underline" target="_blank">New Zones</a></li>
                        <li><a href="https://gyazo.com/a499ef8c1a69cc508aae21ef4ded29b9" className="text-blue-400 underline" target="_blank">VFX</a></li>
                        <li><a href="https://gyazo.com/04c2d15aefd8bddfac6598506ff38364" className="text-blue-400 underline" target="_blank">Dashing</a></li>
                        <li><a href="https://gyazo.com/b1f36e7678c0974bc29618c3c13bee00.mp4" className="text-blue-400 underline" target="_blank">City Dialogue</a></li>
                        <li><a href="https://gyazo.com/c388e23e82aee8278ffe720440d588ff" className="text-blue-400 underline" target="_blank">Data Storage</a></li>
                    
                    
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">🧊 Dev Team</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Scripter – <strong>Brian Wang (haroharper)</strong></li>
                        <li>Animator – <strong>Nikolas Huang (SnooThe3rd)</strong></li>
                        <li>Builder – <strong>Caleb Wang (Boilingyousuckhacker)</strong></li>
                        <li>Modeler – <strong>0xRust</strong></li>
                        <li>Music – <strong>Banna</strong> & <strong>PotatoOfFreedom</strong></li>
                        <li>Moderator – <strong>Syix</strong> & <strong>FunnTime</strong></li>
                        <li>Artist Contributor – <strong>Daniel (Yoohala) </strong> & <strong>Rei (want_to_fish)</strong></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">🔗 Links</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li><a href="https://www.roblox.com/games/10229964755/Project-Agile" className="text-blue-400 underline" target="_blank">🎮 Roblox Game Page</a></li>
                        <li><a href="https://discord.gg/XA4veAQCak" className="text-blue-400 underline" target="_blank">💬 Join our Discord</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9tTtR3KgL6A&t" className="text-blue-400 underline" target="_blank">📺 Devlog 0</a></li>
                        <li><a href="https://www.youtube.com/watch?v=vhpAcaUTmPI" className="text-blue-400 underline" target="_blank">📺 Sneak Peek 1</a></li>
                        <li><a href="https://www.youtube.com/watch?v=05khEJr6alw" className="text-blue-400 underline" target="_blank">📺 Sneak Peek 2</a></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">💡 Quote</h2>
                    <blockquote className="border-l-4 pl-4 italic text-gray-300">
                        "What makes someone human? Their body, or their will to fight back?"
                    </blockquote>
                </section>
            </div>

            <div className="mt-16">
                <Image
                    src="/images/agile_studios.png"
                    alt="Project Agile Screenshot"
                    width={800}
                    height={450}
                    className="rounded-lg shadow-2xl"
                />
            </div>

            <div className="flex justify-center mt-12 mb-20">
                <a
                    href="/projects"
                    className="select-none px-6 py-3 rounded-full bg-[#AEC8A4] hover:bg-[#8A784E] text-white text-lg font-semibold transition-colors duration-300"
                >
                    ← Return
                </a>
            </div>
        </div>
    );
};

export default ProjectAgile;
