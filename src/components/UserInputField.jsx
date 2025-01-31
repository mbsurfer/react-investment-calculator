export default function UserInputField({label, id, value, onChange, step}) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="number" step={step || 1} value={value}
                   onChange={(event) => onChange(event.target.value)}
            />
        </p>
    );
}