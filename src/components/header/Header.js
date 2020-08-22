import React from "react";

import UnitToggler from "./UnitToggler";
import SearchBar from "./SearchBar";
import InfoToggler from "./InfoToggler";
import styles from "./header.module.scss";
function Header({ className }) {
	return (
		<header className={className}>
			<UnitToggler className={styles["flex-item"]} />
			<SearchBar className={styles["flex-item"]} />
			<InfoToggler className={styles["flex-item"]} />
		</header>
	);
}

export default Header;
