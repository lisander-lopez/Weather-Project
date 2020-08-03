import React, { useState } from "react";

import styles from "./unittoggler.module.scss";

import { useUnit } from "../../hooks/useUnit";
const getPillClassName = (unit) => {
	// 0 == f 1 == c
	return unit === 0
		? styles["pill-front"] + " " + styles["farenheight"]
		: styles["pill-front"] + " " + styles["celsius"];
};

function UnitToggler({ className }) {
	const [state, dispatch] = useUnit();
	return (
		<div className={className}>
			<div
				className={styles["pill"]}
				onClick={() => {
					dispatch();
				}}
			>
				<div className={styles["pill-back"]}></div>
				<div className={getPillClassName(state.unit)}>
					{state.unit === 0 ? "°F" : "°C"}
				</div>
			</div>
		</div>
	);
}

export default UnitToggler;
