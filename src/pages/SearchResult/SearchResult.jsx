import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/Products";
import "./SearchResult.scss";

function SearchResult() {
	const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search");
    const [ page, setPage] = useState(1);

	async function getProductList() {
		try {
			const { results } = await getProducts( { query: `search?q=${searchValue}&offset=${page * 10}&limit=10` } );
			setProducts(results);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getProductList();
	}, []);

	if (!products) {
		return <div>Loading</div>;
	}

    function handleNextPage() {
        setPage(page + 1);
    }

	return (
    <div className="Search-result">
        <button onClick={handleNextPage}>Next Page</button>
    </div>
    );
}

export default SearchResult;
