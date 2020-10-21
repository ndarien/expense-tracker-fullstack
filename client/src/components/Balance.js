import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
	const { transactions, addBalance, balances, loading } = useContext(
		GlobalContext
	);

	const amount = transactions.map(transaction => transaction.amount);
	const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

	const newBalance = {
		amount: total
	};

	// useEffect(() => {
	// 	if (balances.length > 19) {
	// 		balances.shift();
	// 	}
	// 	let res = balances.map(a => a.amount);
	// 	let num = res.length - 1;

	// 	if (!loading && transactions.length > 1) {
	// 		addBalance(newBalance);
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [transactions]);

	useEffect(() => {
		let res = balances.map(a => a.amount);
		if (res.length !== 0) {
			if (!loading && res[res.length - 1].toFixed(2) !== total) {
				console.log("this ran!");
				addBalance(newBalance);
			}
		}
	}, [transactions]);

	return (
		<div>
			<h4>Current Balance</h4>
			<h1>${total}</h1>
		</div>
	);
};
