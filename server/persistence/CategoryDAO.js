class CategoryDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from category where category_status = 1', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from category where category_id = ? and category_status = 1',[id], callback);
	}

	salva(category,callback){
		this._connection.query('insert into category set ?', category, callback);
	}

	atualiza(category,callback){
		this._connection.query('update category set category_desc = ?, category_sub_id = ? where category_id = ?', [category.category_desc, category.category_sub_id, category.category_id], callback);
	}

	exclui(id, callback){
		this._connection.query('update category set category_status = 0 where category_id = ?', [id], callback);
	}


}

module.exports = ()=> CategoryDAO;