const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

exports.getList = async (req, res) => {
	const list = await Todo.find();
	res.render('index', {list: list});
}

exports.makeItem = async (req, res) => {
	const todo = await (new Todo(req.body)).save();
	res.redirect('/');
}

exports.deleteItem = async (req, res) => {
	await Todo.findByIdAndRemove(req.body._id);
	res.redirect('/');
}

exports.updateItem = (req, res) => {
	if (req.body.done) {
		Todo.findByIdAndUpdate(req.body.id, {done: true}, (err, newItem) => {
			if (err) return res.send(500, {error: err});
		});
	} else {
		Todo.findByIdAndUpdate(req.body.id, {done: false}, (err, newItem) => {
			if (err) return res.send(500, {error: err});
		});
	}
}