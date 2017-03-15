module.exports = (app)=>{

    app.get('/produtos', (req, res)=>{

        let connection = app.persistence.connectionFactory();
        let productDAO = new app.persistence.ProductDAO(connection);

        productDAO.lista((err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            res.json(result);
            return;

        });

    });    

    app.get('/produtos/produto/:id', (req, res)=>{

        let id = req.params.id;

        let connection = app.persistence.connectionFactory();
        let productDAO = new app.persistence.ProductDAO(connection);

        productDAO.buscaPorId(id, (err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            res.json(result);
            return;

        });

    });

    app.delete('/produtos/produto/:id', (req, res)=>{

        let dados = {};
        
        let id = req.params.id;
        dados.product_id = id;

        let connection = app.persistence.connectionFactory();
        let productDAO = new app.persistence.ProductDAO(connection);

        productDAO.exclui(id, (err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            res.json(dados);

            return;

        });

    });

    app.put('/produtos/produto/:id', (req, res)=>{

        let dados = {};

        dados.product_id = req.params.id;
        dados.product_name = req.body['product_name'];
        dados.product_desc = req.body['product_desc'];
        dados.product_qty = req.body['product_qty'];
        dados.product_value = req.body['product_value'];
        dados.product_category_id = req.body['product_category_id'];

        let connection = app.persistence.connectionFactory();
        let productDAO = new app.persistence.ProductDAO(connection);

        productDAO.atualiza(dados, (err, result)=>{
            if(err){
                res.status(500).send(err);
                return;
            }

            res.send(dados);
        });

    });


    app.post('/produtos/produto', (req, res)=>{

        let dados = {};

        dados.product_name = req.body['product_name'];
        dados.product_desc = req.body['product_desc'];
        dados.product_qty = req.body['product_qty'];
        dados.product_value = req.body['product_value'];
        dados.product_category_id = req.body['product_category_id'];

        let connection = app.persistence.connectionFactory();
        let productDAO = new app.persistence.ProductDAO(connection);

        productDAO.salva(dados, (err, result)=>{
            if(err){
                res.status(500).send(err);
                return;
            }

            res.send(dados);
        });

    });

}