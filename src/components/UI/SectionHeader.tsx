interface Props{
    sectionHeader: string;
}
const SectionHeader:React.FC<Props>= ({sectionHeader}) => {
    return (
        <header className="font-bold sm:text-base text-sm text-red-900">
            <span className="bg-red-900 rounded mr-2 sm:mr-4 py-[5px] sm:py-[7px] px-[7px] sm:px-[9px]" /> {sectionHeader}
        </header>

    );
};

export default SectionHeader;