import React from "react";
import styles from "./maincard.module.scss";

function MainCard({ className }) {
	const state = {
		high: "90°F",
		low: "79°F",
		current: "70°F",
		code: 800,
		desc: "Clear",
	};
	return (
		<main className={className}>
			<div className={styles["card-wrapper"]}>
				<div className={styles["card-row"]}>NOW</div>
				<div className={styles["card-row"] + " " + styles["middle-row"]}>
					<div className={styles["high-temp"]}>High: {state.high}</div>
					<div className={styles["forecast-image"]}>
						IMAGE GOES HERE CODE {state.code}
					</div>
					<div className={styles["low-temp"]}>Low: {state.low}</div>
				</div>
				<div className={styles["card-row"]}>
					<div className={styles["current-temp"]}> {state.current}</div>
				</div>
				<div className={styles["card-row"]}>
					<div className={styles["temp-description"]}>{state.desc}</div>
				</div>
			</div>
		</main>
	);
}

export default MainCard;
