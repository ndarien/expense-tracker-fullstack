import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
	transactions: [],
	balances: [],
	error: null,
	adding: true,
	loading: true
};

//Create Context
export const GlobalContext = createContext(initialState);

//Proivder
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	//Actions
	async function deleteTransaction(id) {
		try {
			await axios.delete(`/api/v1/transactions/${id}`);
			dispatch({
				type: "DELETE_TRANSACTION",
				payload: id
			});
		} catch (err) {
			dispatch({
				type: "TRANSACTION_ERROR",
				payload: err.response.data.error
			});
		}
	}

	async function addTransaction(transaction) {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};
		try {
			const res = await axios.post("/api/v1/transactions", transaction, config);
			dispatch({
				adding: 2,
				type: "ADD_TRANSACTION",
				payload: res.data.data
			});
		} catch (err) {
			dispatch({
				type: "TRANSACTION_ERROR",
				payload: err.response.data.error
			});
		}
	}

	async function getTransactions() {
		try {
			const res = await axios.get("/api/v1/transactions");
			dispatch({
				type: "GET_TRANSACTIONS",
				payload: res.data.data
			});
		} catch (err) {
			dispatch({
				type: "TRANSACTION_ERROR",
				payload: err.response.data.error
			});
		}
	}

	async function addBalance(balance) {
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};
		try {
			const res = await axios.post("/api/v1/balance", balance, config);
			dispatch({
				type: "ADD_BALANCE",
				payload: res.data.data
			});
		} catch (err) {
			dispatch({
				type: "TRANSACTION_ERROR",
				payload: err.response.data.error
			});
		}
	}

	async function getBalance() {
		try {
			const res = await axios.get("/api/v1/balance");
			dispatch({
				type: "GET_BALANCE",
				payload: res.data.data
			});
		} catch (err) {
			dispatch({
				type: "BALANCE_ERROR",
				payload: err.response.data.error
			});
		}
	}

	function setAdding(val) {
		dispatch({
			type: "SET_ADDING",
			payload: val
		});
	}

	// function addBalance(balance) {
	// 	dispatch({
	// 		type: "ADD_BALANCE",
	// 		payload: balance
	// 	});
	// }

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				balances: state.balances,
				error: state.error,
				loading: state.loading,
				adding: state.adding,
				deleteTransaction,
				getTransactions,
				addTransaction,
				getBalance,
				addBalance,
				setAdding
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
