module.exports = (app)=>{

    app.get('/categorias', (req,res)=>{

        let connection = app.persistence.connectionFactory();
        let categoryDAO = new app.persistence.CategoryDAO(connection);

        categoryDAO.lista((err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            console.log('categorias encontrado'+JSON.stringify(result));
            res.json(result);

            return;

        });

    });


    app.get('/categorias/categoria/:id', (req,res)=>{

        let id = req.params.id;
        let connection = app.persistence.connectionFactory();
        let categoryDAO = new app.persistence.CategoryDAO(connection);

        categoryDAO.buscaPorId(id,(err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            console.log('categorias encontrado'+JSON.stringify(result));
            res.json(result);

            return;

        });

    });

    app.delete('/categorias/categoria/:id',(req,res)=>{

        let dados = {};

        let id = req.params.id;
        dados.category_id = id;

        let connection = app.persistence.connectionFactory();
        let categoryDAO = new app.persistence.CategoryDAO(connection);    

        categoryDAO.exclui(id, (err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            res.send(dados);

            return;
        });    

    });

    app.put('/categorias/categoria/:id', (req, res)=>{

        let dados = {};
        dados.category_id = req.params.id;
        dados.category_desc = req.body['category_desc']; 
        dados.category_sub_id = req.body['category_sub_id'] == "" ? null : req.body['category_sub_id']; 

        let connection = app.persistence.connectionFactory();
        let categoryDAO = new app.persistence.CategoryDAO(connection);  

        categoryDAO.atualiza(dados, (err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            console.log('dados atualizados'+JSON.stringify(dados));

            res.send(dados);

        });        

    });

    app.post('/categorias/categoria', (req, res)=>{

        let dados = {};

        dados.category_desc = req.body['category_desc']; 
        dados.category_sub_id = req.body['category_sub_id'] == "" ? null : req.body['category_sub_id']; 

        let connection = app.persistence.connectionFactory();
        let categoryDAO = new app.persistence.CategoryDAO(connection);  

        categoryDAO.salva(dados, (err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            console.log('dados atualizados'+JSON.stringify(dados));

            res.send(dados);

        });        

    });    


}