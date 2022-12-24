const Pet = require("../models/pet.model");

module.exports.findAllPets = (req, res) => {
  Pet.find()
  .sort('type')
    .then(allDaPets => res.json({ pets: allDaPets }))
    .catch(err => res.json({ message: "Can't find the pets, something went wrong", error: err }));
};

module.exports.findOneSinglePet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(oneSinglePet => res.json({ pet: oneSinglePet }))
		.catch(err => res.json({ message: "Can't find the pet, something went wrong", error: err }));
};

module.exports.createNewPet = (req, res) => {
  Pet.create(req.body)
    .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
    .catch(err => res.status(400).json(err));
};

module.exports.updateExistingPet = (req, res) => {
  Pet.findByIdAndUpdate( req.params.id , req.body, { new: true , runValidators: true})
    .then(updatedPet => res.json({ pet: updatedPet }))
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Can't delete the pet, something went wrong", error: err }));
};
