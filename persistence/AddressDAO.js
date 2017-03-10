class AddressDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from address', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from address where id = ?',[id], callback);
	}

	salva(user,callback){
		this._connection.query('insert into address set ?', user, callback);
	}

	atualiza(user,callback){
		this._connection.query('update address set status = ? where id = ?', [user.status, user.id], callback);
	}


}

module.exports = ()=> AddressDAO;

