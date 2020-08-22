import React from "react";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import MainCard from "./components/main-card/MainCard";
import Cards from "./components/cards/Cards";

import { UnitProvider } from "./hooks/useUnit";

function App() {
	return (
		<UnitProvider>
			<div className={styles["main-container"]}>
				<Header className={styles.item} />
				<MainCard className={styles.item} />
				<Cards className={styles.item} />
			</div>
		</UnitProvider>
	);
}

export default App;
