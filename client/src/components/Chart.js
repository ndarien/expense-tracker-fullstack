import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Line } from "react-chartjs-2";

export const Chart = () => {
	const { balances, getBalance } = useContext(GlobalContext);
	const [chartData, setChartData] = useState({});

	useEffect(() => {
		getBalance();
	}, []);

	let res = balances.map(a => a.amount);

	const chart = () => {
		setChartData({
			labels: res,
			datasets: [
				{
					label: "Historical Balance",
					data: res,
					fill: true,
					backgroundColor: "rgba(102,153,0,0.2)",
					borderColor: "rgba(102,153,0,1)"
				}
			]
		});
	};
	useEffect(() => {
		chart();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [balances]);

	return (
		<div>
			<Line data={chartData} />
		</div>
	);
};
