const NavAnchor = ({ href, title, onClick }) => {
    return (
        <a
            href={href}
            className="bg-[#AEC8A4] block py-2 pl-3 pr-4 mr-4 text-white text-lg font-semibold hover:text-[#E7EFC7] hover:bg-[#8A784E] rounded transition-colors duration-300 ease-in-out"
            onClick={onClick}
        >
            {title}
        </a>
    );
}

export default NavAnchor