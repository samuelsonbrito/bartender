class UserTypeDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from user_type', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from user_type where id = ?',[id], callback);
	}

	salva(user,callback){
		this._connection.query('insert into user_type set ?', user, callback);
	}

	atualiza(user,callback){
		this._connection.query('update user_type set status = ? where id = ?', [user.status, user.id], callback);
	}

}

module.exports = ()=> UserTypeDAO;