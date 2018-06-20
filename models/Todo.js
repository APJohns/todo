const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema(
	{
		content: {type: String, max: 500, required: true},
		done: {type: Boolean, default: false}
	}
);

module.exports = mongoose.model('Todo', TodoSchema);