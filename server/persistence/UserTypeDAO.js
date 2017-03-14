class UserTypeDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from user_type where type_status = 1', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from user_type where type_id = ? and type_status = 1',[id], callback);
	}

	salva(user,callback){
		this._connection.query('insert into user_type set ?', user, callback);
	}

	atualiza(user,callback){
		this._connection.query('update user_type set type_desc = ? where type_id = ?', [user.type_desc, user.type_id], callback);
	}

	exclui(id, callback){
		this._connection.query('update user_type set type_status = 0 where type_id = ?', [id], callback);
	}

}

module.exports = ()=> UserTypeDAO;