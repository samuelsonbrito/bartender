class UserDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from user', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from user where id = ?',[id], callback);
	}

	salva(user,callback){
		this._connection.query('insert into user set ?', user, callback);
	}

	atualiza(user,callback){
		this._connection.query('update user set status = ? where id = ?', [user.status, user.id], callback);
	}

}

module.exports = ()=> UserDAO;