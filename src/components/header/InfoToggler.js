import React from "react";
import styles from "./infotoggler.module.scss";
export default function InfoToggler({ className }) {
	return (
		<div className={className}>
			<div className={styles["info-btn-wrapper"]}>i</div>
		</div>
	);
}
