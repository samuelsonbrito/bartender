class OrderItemDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from order_item', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from order_item where id = ?',[id], callback);
	}

	salva(order,callback){
		this._connection.query('insert into order_item set ?', order, callback);
	}

	atualiza(order,callback){
		this._connection.query('update order_item set status = ? where id = ?', [order.status, order.id], callback);
	}

}

module.exports = ()=> OrderItemDAO;