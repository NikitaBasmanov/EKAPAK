interface ButtonProps {
    text: string;
    onClick: () => void;
    icon?: React.ReactNode;
    isInverted?: boolean;
    isFullWidth?: boolean;
}

const Button = ({
    text,
    onClick,
    icon,
    isInverted,
    isFullWidth,
}: ButtonProps) => {
    return (
        <button
            className={`px-[15px] sm:px-[18px] lg:px-[20px] py-[10px] sm:py-[12px] lg:py-[14px] ${
                isInverted ? 'bg-white border border-[#00B0FF]' : 'bg-[#00B0FF]'
            } ${
                isFullWidth ? 'w-full' : 'ml-[15px] sm:ml-[20px] lg:ml-[30px]'
            } flex flex-row items-center gap-[8px] sm:gap-[10px] cursor-pointer rounded-[8px] sm:rounded-[10px] transition-all duration-200 hover:opacity-90`}
            onClick={onClick}
        >
            {icon}
            <p
                className={`text-[12px] sm:text-[14px] lg:text-[18px] ${
                    isInverted ? 'text-[#00B0FF]' : 'text-white'
                }`}
            >
                {text}
            </p>
        </button>
    );
};

export default Button;
