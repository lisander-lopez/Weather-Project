import React, { useReducer, useContext, createContext } from "react";
const initState = { unit: 0 }; // 0 == F, 1 == C

function reducer(state, action) {
	// This function will be called when you want to toggle the unit! from F to C
	return { unit: (state.unit + 1) % 2 }; // Toggle between 1 and 2
}

const UnitContext = createContext({});

export const UnitProvider = ({ children }) => {
	// Children is the rest of the components that need to render and need this context
	return (
		<UnitContext.Provider value={useReducer(reducer, initState)}>
			{children}
		</UnitContext.Provider>
	);
};

export const useUnit = () => {
	return useContext(UnitContext);
};
