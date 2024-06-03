interface Props{
    text:string;
    className?: string;
}


const OutlinedButton:React.FC<Props> = ({text, className}) => {
    return (
        <div>
            <button className={`border-solid border-[1px] rounded border-gray-400 text-black 
        font-semibold hover:text-gray-300 text-[12px] sm:text-sm lg:text-[16px] px-5 sm:px-6 lg:px-7 py-1 sm:py-[6px] lg:py-2 hover:shadow-md duration-200 ${className}`}>
            {text}
        </button>
        </div>
    );
};

export default OutlinedButton;
