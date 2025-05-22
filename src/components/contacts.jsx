
export default function Contacts({name, number, onDelete, id}) {
    

    return (
        <>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </>
    )
}