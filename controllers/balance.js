const Balance = require("../models/Balance");

//@desc Get all transactions
//@route GET /api/v1/balance
//@access Public
exports.getBalance = async (req, res, next) => {
	try {
		const balance = await Balance.find();
		return res.status(200).json({
			success: true,
			count: balance.length,
			data: balance
		});
	} catch (e) {
		return res.status(500).json({
			success: false
		});
	}
};

exports.addBalance = async (req, res, next) => {
	try {
		const { amount } = req.body;
		const balance = await Balance.create(req.body);
		return res.status(201).json({
			success: true,
			data: balance
		});
	} catch (e) {
		if (e.name === "ValidationError") {
			const messages = Object.values(e.errors).map(val => val.message);
			return res.status(400).json({
				success: false,
				error: messages
			});
		} else {
			return res.status(500).json({
				success: false
			});
		}
	}
};
