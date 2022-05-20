import "./SearchInput.scss";

function SearchInput({data, change, keyDown}) {
    return (
        <input
        name="search"
        id="search"
        type="text"
        value={data}
        onChange={change}
        className="Search-input" 
        placeholder="Nunca dejes de buscar" 
        onKeyDown={keyDown}/>
    )
}

export default SearchInput;