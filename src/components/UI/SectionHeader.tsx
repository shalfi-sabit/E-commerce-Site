import Wrapper from "./Wrapper";

interface Props {
  sectionHeader: string;
  isTextBlack?: boolean;
  customTextSize?: string;
}
const SectionHeader: React.FC<Props> = ({
  sectionHeader,
  isTextBlack,
  customTextSize,
}) => {
  return (
    <Wrapper
      className={`   ${isTextBlack ? "text-black-900" : "text-red-900"} ${
        customTextSize ? customTextSize : " font-bold text-[12px] sm:text-sm"
      }`}
    >
      <span
        className={`bg-red-900 rounded mr-2 sm:mr-4 py-[5px] sm:py-[7px] px-[7px] sm:px-[9px]`}
      />
      {sectionHeader}
    </Wrapper>
  );
};

export default SectionHeader;
