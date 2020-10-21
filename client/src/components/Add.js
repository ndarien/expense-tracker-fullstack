import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Add = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	const [transactionType, setTransactionType] = useState("");
	const { addTransaction, addBalance, balances, transactions } = useContext(
		GlobalContext
	);

	const onSubmit = e => {
		e.preventDefault();

		//Form validation
		if (!text) {
			return alert("Title cannot be empty!");
		}

		if (!transactionType) {
			return alert("Transaction type must be selected!");
		}

		if (amount < 1) {
			return alert("Please enter an amount from 1 - 9999999!");
		}

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: transactionType * amount
		};

		const clearTransaction = () => {
			setText("");
			setAmount(0);
		};
		let res = balances.map(a => a.amount);
		let tList = transactions.map(
			transaction => (transaction = { transaction })
		);

		const newBalance = {
			amount: res[res.length - 1] + transactionType * amount
		};

		const newBalance2 = {
			amount: transactionType * amount
		};

		addTransaction(newTransaction);
		clearTransaction();
		if (tList.length === 0) {
			addBalance(newBalance2);
		} else {
			addBalance(newBalance);
		}
	};

	return (
		<div>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">Title: </label>
					<input
						type="text"
						value={text}
						onChange={e => {
							setText(e.target.value);
						}}
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="text">Transaction Type: </label>
					<br />
					<input
						type="radio"
						value="Expense"
						name="ExpenseType"
						onChange={() => {
							setTransactionType(-1);
						}}
					/>{" "}
					Expense
					<br />
					<input
						type="radio"
						value="Income"
						name="ExpenseType"
						onChange={() => {
							setTransactionType(1);
						}}
					/>{" "}
					Income
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount: <br />
					</label>
					<input
						type="number"
						value={amount}
						onChange={e => {
							setAmount(e.target.value);
						}}
						onClick={e => {
							setAmount("");
						}}
						placeholder="Enter amount..."
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</div>
	);
};
