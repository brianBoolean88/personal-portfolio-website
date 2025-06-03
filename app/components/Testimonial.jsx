import Image from "next/image";

const Testimonial = ({ name, position, image, quote }) => {
    return (
        <div className="bg-[#44624a] rounded-xl p-8 shadow-lg flex flex-col items-center">
            <svg className="w-10 h-10 text-[#E7EFC7] mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 00-4-4H5a4 4 0 014-4V5a7 7 0 00-7 7v5a2 2 0 002 2h3a2 2 0 002-2zm12 0v-2a4 4 0 00-4-4h-.01a4 4 0 014-4V5a7 7 0 00-7 7v5a2 2 0 002 2h3a2 2 0 002-2z" />
            </svg>
            <p className="italic text-lg text-[#E7EFC7] text-center mb-6">“{quote}”</p>
            <Image 
                src={image}
                alt={`${name}'s picture`}
                width={64}
                height={64}
                className="rounded-full mb-2 object-cover"
            />
            <div className="text-white font-semibold">{name}</div>
            <div className="text-[#AEC8A4] text-sm">{position}</div>
        </div>
    );
}

export default Testimonial;