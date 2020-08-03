import React from "react";
import { useUnit } from "../../hooks/useUnit";
import Card from "./Card";

import styles from "./Cards.module.scss";

function Cards() {
	const [state, dispatch] = useUnit();
	return (
		<section>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</section>
	);
}

export default Cards;
