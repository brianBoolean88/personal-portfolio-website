import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";

const ThreeDPin = ({ title, description, img, href, monogram }) => {
    return (
        <div className="relative mx-auto h-80 w-80">
            <PinContainer
                title={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                containerClassName="h-80 w-80"
            >
                <div className="flex h-[18rem] w-[18rem] flex-col tracking-tight text-slate-100/50">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-[#2e3b4e]">
                        {title}
                    </h3>
                    <div className="text-sm !m-0 !p-0 font-normal leading-relaxed">
                        <span className="text-[#2e3b4e]">
                            {description}
                        </span>
                    </div>
                    {img ? (
                        <Image
                            src={img}
                            alt={title}
                            width={110}
                            height={110}
                            className="mt-auto mb-1 rounded-lg object-cover mx-auto h-[110px] w-[110px]"
                        />
                    ) : (
                        <div className="mt-auto mb-1 flex items-center justify-center">
                            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-[#2e3b4e]/15 text-xl font-bold tracking-wide text-[#2e3b4e]">
                                {monogram || title.slice(0, 2).toUpperCase()}
                            </div>
                        </div>
                    )}
                </div>
            </PinContainer>
        </div>
    );
}

export default ThreeDPin;