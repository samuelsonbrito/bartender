class ProductDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from product', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from product where id = ?',[id], callback);
	}

	salva(product,callback){
		this._connection.query('insert into product set ?', product, callback);
	}

	atualiza(product,callback){
		this._connection.query('update product set status = ? where id = ?', [product.status, product.id], callback);
	}


}

module.exports = ()=> ProductDAO;