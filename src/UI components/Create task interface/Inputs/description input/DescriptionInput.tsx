import "./descriptionInput.css";

export default function DescriptionInput({description, setDescription}:{description:string, setDescription: (description:any) => void}) {
    return (
        <>
            <div className="descriptionInput">
                <textarea
                    maxLength={300}
                    rows={10}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Введите описание задачи"
                    className="descriptionTextarea"
                    value={description}
                />
            </div>
        </>
    );
}
