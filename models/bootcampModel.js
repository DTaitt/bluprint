const db = require('../db/config.js');

const Bootcamp = {};

Bootcamp.findAll = function() {
	// return db.query('SELECT * FROM careers');
	return db.query(
		`
			SELECT name, field, price, length, location_id 
			FROM bootcamps 
			LEFT JOIN careers 
			ON bootcamps.career_id = careers.id;
		`
	);
};

module.exports = Bootcamp;