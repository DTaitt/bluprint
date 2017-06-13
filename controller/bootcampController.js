const Bootcamp = require('../models/bootcampModel.js');

const controller = {};

controller.index = function(req, res) {
	Bootcamp.findAll()
		.then((bootcamps) => {
			res.json({
				data: bootcamps,
			});
		})
		.catch(function(err) {
	      res.status(400).json(err);
	    });
};

module.exports = controller;