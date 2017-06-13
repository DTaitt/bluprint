const db = require('../db/config.js');

const Bootcamp = {};

Bootcamp.findAll = function() {
	// return db.query('SELECT * FROM careers');
	return db.query(
		`
			SELECT name, field, price, length, city
			FROM bootcamps 
			LEFT JOIN careers 
			ON bootcamps.career_id = careers.id
			LEFT JOIN locations 
			ON bootcamps.location_id = locations.id;
		`
	);
};

module.exports = Bootcamp;