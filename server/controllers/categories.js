module.exports = (app)=>{


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



}