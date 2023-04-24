import React from "react";

function useLocalStorage(itemName, initialValue) {
	const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
	const { syncronizedItem, error, loading, item } = state;

	const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
	const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem });
	const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem });
	const onSyncronize = () => dispatch({ type: actionTypes.syncronize });

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (!localStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageItem);
				}
				onSuccess(parsedItem);
			} catch (error) {
				onError(error);
			}
		}, 3000);
	}, [syncronizedItem]);

	const saveItem = (newItem) => {
		try {
			const stringifiedItem = JSON.stringify(newItem);
			localStorage.setItem(itemName, stringifiedItem);

			onSave(newItem);
		} catch (error) {
			onError(error);
		}
	};

	const syncronizeItem = () => onSyncronize();

	return {
		item,
		saveItem,
		loading,
		error,
		syncronizeItem,
	};
}

const initialState = ({ initialValue }) => ({
	syncronizedItem: true,
	error: false,
	loading: true,
	item: initialValue,
});

const actionTypes = {
	error: "ERROR",
	success: "SUCCESS",
	save: "SAVE",
	syncronize: "SYNCRONIZE",
};

const reducerObject = (state, payload) => ({
	[actionTypes.error]: {
		...state,
		error: true,
	},
	[actionTypes.success]: {
		...state,
		error: false,
		loading: false,
		syncronizedItem: true,
		item: payload,
	},
	[actionTypes.save]: {
		...state,
		item: payload,
	},
	[actionTypes.syncronize]: {
		...state,
		loading: true,
		syncronizedItem: false,
	},
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

export { useLocalStorage };
