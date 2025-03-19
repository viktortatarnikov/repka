interface ButtonProps {
    disabled: boolean;
    onClick: () => void;
}

export default function Button({ disabled, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`mt-4 p-2 rounded-md text-white w-64 ${
                disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
        >
            Начать
        </button>
    );
}
