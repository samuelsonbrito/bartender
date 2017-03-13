class OrderDAO{

	constructor(connection){
		this._connection = connection;
	}

	lista(callback){
		this._connection.query('select * from order', callback);
	}

	buscaPorId(id,callback){
		this._connection.query('select * from order where id = ?',[id], callback);
	}

	salva(order,callback){
		this._connection.query('insert into order set ?', order, callback);
	}

	atualiza(order,callback){
		this._connection.query('update order set status = ? where id = ?', [order.status, order.id], callback);
	}

}

module.exports = ()=> OrderDAO;