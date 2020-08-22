import React from "react";
import styles from "./card.module.scss";
import WeatherIcon from "../weather-icons/WeatherIcon";
function Card(props) {
	// console.log(state);
	const { day, high, low, current, code, desc, delay } = props.value;
	return (
		<section className={styles.card}>
			<h2>{day}</h2>
			<div className={styles.seperator} />
			<div className="">
				<WeatherIcon code={code} delay={props.delay} />
			</div>
			<div className={styles.seperator} />
			<div className={styles["card-current-temp"]}>{current}</div>
			<div className={styles.seperator} />
			<div className="">{desc}</div>
			<div className="">
				<span>High: {high}</span>
				<span>Low: {low}</span>
			</div>
		</section>
	);
}

export default Card;
