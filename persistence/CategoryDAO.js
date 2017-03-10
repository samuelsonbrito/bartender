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

	salva(category,callback){
		this._connection.query('insert into category set ?', category, callback);
	}

	atualiza(category,callback){
		this._connection.query('update category set status = ? where id = ?', [category.status, category.id], callback);
	}


}

module.exports = ()=> CategoryDAO;