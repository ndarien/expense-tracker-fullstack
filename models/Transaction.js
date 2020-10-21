const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true,
		required: [true, "Title cannot be empty!"]
	},
	amount: {
		type: Number,
		required: [true, "Amount must be a positive number!"]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Transaction", TransactionSchema);
