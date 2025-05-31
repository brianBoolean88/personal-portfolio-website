import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";

const ThreeDPin = ( {title, description, img, href} ) => {
    return (
        <PinContainer
            title={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-[#495544]">
                    {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-[#4b5546] ">
                        {description}
                    </span>
                </div>
                <Image
                    src={img}
                    alt={title}
                    width={110}
                    height={110}
                    className="mt-4 rounded-lg object-cover mx-auto"
                />
            </div>
        </PinContainer>
    );
}

export default ThreeDPin;