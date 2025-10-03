interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#00B0FF] rounded-full peer peer-checked:bg-[#00B0FF] transition-colors duration-300"></div>
            <div className="absolute left-0.5 top-0.5 bg-white border border-gray-300 peer-checked:translate-x-5 peer-checked:border-[#00B0FF] rounded-full h-5 w-5 transition-transform duration-300"></div>
        </label>
    );
};

export default Switch;
