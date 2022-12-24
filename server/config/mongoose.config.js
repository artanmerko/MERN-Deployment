const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pet-db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the pet database"))
	.catch(err => console.log("Something went wrong when connecting to the pet database", err));
