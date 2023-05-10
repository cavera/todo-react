import React from "react";
import { IconCheck } from "./iconcheck";
import { IconDelete } from "./IconDelete";
import { IconEdit } from "./Edit";

const iconTypes = {
	check: <IconCheck />,
	delete: <IconDelete />,
	edit: <IconEdit />,
};

function TodoIcon(props) {
	return <>{iconTypes[props.type]}</>;
}

export { TodoIcon };
