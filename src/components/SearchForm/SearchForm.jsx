import "./SearchForm.scss";
import { SearchButton, SearchInput } from '../'

function SearchForm() {
    return (
        <div className="Search-form">
            <SearchInput />
            <SearchButton />
        </div>
    )
}

export default SearchForm;