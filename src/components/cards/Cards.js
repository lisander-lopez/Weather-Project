import React from "react";
import { useUnit } from "../../hooks/useUnit";
import Card from "./Card";

import styles from "./Cards.module.scss";

function Cards({ className }) {
	const [unit, setUnit] = useUnit();
	const state = {
		day: "BlahDay",
		high: "90°F",
		low: "79°F",
		current: "70°F",
		code: 800,
		desc: "Clear",
	};
	return (
		<section className={className + " " + styles["main-wrapper"]}>
			<Card value={state} delay={2} />
			<Card value={state} delay={1} />
			<Card value={state} delay={3} />
			<Card value={state} delay={2} />
			<Card value={state} delay={1} />
		</section>
	);
}

export default Cards;
