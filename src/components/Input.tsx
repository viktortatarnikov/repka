interface InputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function Input({ value, onChange }: InputProps) {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Введите ваше имя"
            className="p-2 border rounded-md w-64"
        />
    );
}
