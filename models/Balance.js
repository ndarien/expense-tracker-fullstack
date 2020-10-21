const mongoose = require("mongoose");

const BalanceSchema = new mongoose.Schema({
	amount: {
		type: Number,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Balance", BalanceSchema);
