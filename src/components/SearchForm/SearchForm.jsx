import "./SearchForm.scss";
import { SearchButton, SearchInput } from '../'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    function handleSearchClick() {
        navigate(`/items?search=${search}`);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    }

    return (
        <div className="Search-form">
            <SearchInput data={search} change={onChangeSearch} keyDown={ handleKeyDown } />
            <SearchButton click={ handleSearchClick }/>
        </div>
    )
}

export default SearchForm;