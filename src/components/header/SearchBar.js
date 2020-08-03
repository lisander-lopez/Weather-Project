import React from "react";
import styles from "./searchbar.module.scss";

import { FaSearch } from "react-icons/fa";

export default function SearchBar({ className }) {
	return (
		<div className={className}>
			<div className={styles["search-wrapper"]}>
				<FaSearch className={styles["search-icon"]} />
				<input type="text" name="searchQuery" id="searchBox" />
			</div>
		</div>
	);
}
