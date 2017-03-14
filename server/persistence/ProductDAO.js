class ProductDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from product', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from product where product_id = ?',[id], callback);
	}

	salva(product,callback){
		this._connection.query('insert into product set ?', product, callback);
	}

	atualiza(product,callback){
		this._connection.query('update product set product_name = ?, product_desc = ?, product_qty = ?, product_value = ?, product_category_id = ? where product_id = ?', [product.product_name,product.product_desc,product.product_qty,product.product_value,product.product_categoy_id, product.product_id], callback);
	}
	exclui(id, callback){
		this._connection.query('update product set product_status = 0 where product_id = ?', [id], callback);
	}


}

module.exports = ()=> ProductDAO;