export default function Input({name, setValue, type, label}) {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input
                value={name}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                className="form-control"
            />
        </div>
    )
}