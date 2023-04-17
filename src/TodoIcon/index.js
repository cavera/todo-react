import React from "react";
import { IconCheck } from "./iconcheck";
import { IconDelete } from "./IconDelete";

const iconTypes = {
	check: <IconCheck />,
	delete: <IconDelete />,
};

function TodoIcon(props) {
	return <>{iconTypes[props.type]}</>;
}

export { TodoIcon };
