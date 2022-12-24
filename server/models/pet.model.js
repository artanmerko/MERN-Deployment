const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
	name:{
		type: String,
		unique : [true, 'This pet has already exist!'],
		required: [true, 'Name is required!'],
		minlength: [3, 'Name must be  at least 3 characters']
	},
	type: {
		type:String,
		required: [true, "Type is required!"],
		minlength: [3, 'Type must be  at least 3 characters']
	},
	description : {
		type: String,
		required: [true, 'Details are required!'],
		minlength: [3, 'Details must be at least 3 characters']
	},
	skills: {
		type: Array,
		minlength :[0],
		maxlength:[3,'Up to 3 skills in the system']
	},
	created: {
    type: Date,
    default: Date.now
}
}, {timestamps: true});

// PetSchema.plugin(uniqueValidator);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;