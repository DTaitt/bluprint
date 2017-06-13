const db = require('../db/config.js');

const Bootcamp = {};

Bootcamp.findAll = function() {
	return db.query('SELECT * FROM bootcamps');
	// return db.query(
	// 	`
	// 		SELECT creature_name, mythology_id, description, image_url, mythology_name 
	// 		FROM creatures 
	// 		LEFT JOIN mythology 
	// 		ON creatures.mythology_id = mythology.id;
	// 	`
	// );
};

module.exports = Bootcamp;