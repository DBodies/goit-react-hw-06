export default function SearchBox({filter, onFilter}) {
    
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" value={filter} onChange={(e) => onFilter(e.target.value)} />
        </>
    )
}