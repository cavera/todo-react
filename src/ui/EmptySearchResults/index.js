import React from "react";

function EmptySearchResults(props) {
	return (
		<>
			<p>
				¡Vaya! Parece que no hay coincidencias de <strong>{props.searchValue}</strong>.
			</p>
			<p>¡Hora de relajarse o agregar algo nuevo! 📝✨</p>
		</>
	);
}

export { EmptySearchResults };
