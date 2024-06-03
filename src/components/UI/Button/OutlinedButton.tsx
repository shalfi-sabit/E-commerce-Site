interface Props {
    text: string;
}


const OutlinedButton:React.FC<Props> = ({text}) => {
    return (
        <div>
            <button className="border-solid border-[1px] rounded border-slate-500 text-black 
        font-semibold hover:text-slate-700 text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 hover:shadow-md duration-200 ">
            {text}
            </button>
        </div>
    );
};

export default OutlinedButton;