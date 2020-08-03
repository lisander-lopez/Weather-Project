import React from "react";
import styles from "./maincard.module.scss";

function MainCard() {
	return (
		<main>
			<div className={styles["card-wrapper"]}>
				<div className={styles["card-row"]}>TOP</div>
				<div className={styles["card-row"] + " " + styles["middle-row"]}>
					<div className={styles["high-temp"]}>HIGH</div>
					<div className={styles["forecast-image"]}>IMAGE GOES HERE</div>
					<div className={styles["low-temp"]}>LOW</div>
				</div>
				<div className={styles["card-row"]}>
					<div className={styles["current-temp"]}> 100DEGRESS</div>
				</div>
				<div className={styles["card-row"]}>
					{" "}
					<div className={styles["temp-description"]}>HOT</div>{" "}
				</div>
			</div>
		</main>
	);
}

export default MainCard;
