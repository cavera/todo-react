import React from "react";
import "./TodoSearch.css";
import { useSearchParams } from "react-router-dom";

function TodoSearch({ searchValue, setSearchValue, loading }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const search = searchParams.get("search") || "";
	console.log("search", search);
	const onSearchValueChange = (event) => {
		setSearchValue(event.target.value);
		setSearchParams({ search: event.target.value });
	};

	React.useEffect(() => {
		if (search?.length > 1) {
			setSearchValue(search);
		}
	}, [search, setSearchValue]);

	return (
		<input
			className='TodoSearch'
			placeholder='Filtro'
			value={search || searchValue}
			onChange={onSearchValueChange}
			disabled={loading}
		/>
	);
}

export { TodoSearch };
