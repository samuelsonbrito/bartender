class ProfileDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from profile', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from profile where id = ?',[id], callback);
	}

	salva(user,callback){
		this._connection.query('insert into profile set ?', user, callback);
	}

	atualiza(user,callback){
		this._connection.query('update profile set status = ? where id = ?', [user.status, user.id], callback);
	}

}

module.exports = ()=> ProfileDAO;