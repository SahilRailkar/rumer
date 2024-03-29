const mongoose = require('mongoose');

const User = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	birthday: { type: String, required: true },
	gender: { type: String, required: true },
	hobbies: String,
	year: String,
	major: String,
	bio: String,
	images: [String],
	savedListings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'listings' }],
});

module.exports = mongoose.model('users', User);
