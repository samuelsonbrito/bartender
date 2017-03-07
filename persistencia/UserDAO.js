function UserDAO (connection) {
	this._connection = connection;
}

UserDAO.prototype.lista = function(callback){
	this._connection.query('select * from user', callback);
}

UserDAO.prototype.buscaPorId = function(id,callback) {
	this._connection.query('select * from user where id = ?',[id], callback);
}

UserDAO.prototype.salva = function(user,callback){
	this._connection.query('insert into user set ?', user, callback);
}

UserDAO.prototype.atualiza = function(user,callback){
	this._connection.query('update user set status = ? where id = ?', [user.status, user.id], callback);
}

module.exports = ()=>{
	return UserDAO;
}
