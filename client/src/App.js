import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { Add } from "./components/Add";
import { Chart } from "./components/Chart";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
	return (
		<GlobalProvider>
			<div className="container">
				<Header />
				<Balance />
				<Chart />
				<IncomeExpense />
				<TransactionList />
				<Add />
			</div>
		</GlobalProvider>
	);
}

export default App;
