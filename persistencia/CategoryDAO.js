class CategoryDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from category', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from category where id = ?',[id], callback);
	}

	salva(user,callback){
		this._connection.query('insert into category set ?', user, callback);
	}

	atualiza(user,callback){
		this._connection.query('update category set status = ? where id = ?', [user.status, user.id], callback);
	}


}

module.exports = ()=> CategoryDAO;