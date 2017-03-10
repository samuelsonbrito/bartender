var mysql = require('mysql');

var connectMYSQL = ()=>{
	return mysql.createConnection({
		host : 'localhost',
		user: 'root',
		password: '',
		database: 'bartender'
	});
};

//função wrapper
module.exports = ()=> connectMYSQL;
