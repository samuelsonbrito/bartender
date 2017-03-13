module.exports = (app)=>{

    app.get('/tiposusuario/tipousuario/:id', (req, res)=>{

        let id = req.params.id;

        let connection = app.persistence.connectionFactory();
        let userTypeDAO = new app.persistence.UserTypeDAO(connection);

        userTypeDAO.buscaPorId(id, (err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            console.log('pagamento encontrado'+JSON.stringify(result));
            res.json(result);

            return;

        });

    });

    app.delete('/tiposusuario/tipousuario/:id', (req,res)=>{

        let dados = {};

        let id = req.params.id;

        dados.type_id = id;
        dados.type_status = 0;

        let connection = app.persistence.connectionFactory();
        let userTypeDAO = new app.persistence.UserTypeDAO(connection);

        userTypeDAO.exclui(dados, (err, result)=>{

            if(err){
                res.status(500).send(err);
                return;
            }

            res.send(dados);

            console.log('pagamento excluido');

        });



    });

    app.put('/tiposusuario/tipousuario/:id', (req, res)=>{

        let dados = {};
        let id = req.params.id;
        let desc = req.body['type_desc'];

        dados.type_id = id;
        dados.type_desc = desc;

        let connection = app.persistence.connectionFactory();
        let userTypeDAO = new app.persistence.UserTypeDAO(connection);

        userTypeDAO.atualiza(dados, (err, result)=>{
            if(err){
                res.status(500).send(err);
                return;
            }

            console.log('Dados alterados!');

            res.send(dados);
        });

    });

    app.post('/tiposusuario/tipousuario', (req, res)=>{

        req.assert("type_desc","Descricao eh obrigatorio").notEmpty();
        var erros = req.validationErrors();

        if(erros){
            console.log("Erros de validacao encontrados");
            res.status(400).send(erros);
            return;
        }


        var connection = app.persistence.connectionFactory();
        var userTypeDAO = new app.persistence.UserTypeDAO(connection);

        var dados = req.body;


        userTypeDAO.salva(dados, (err, result)=>{

            if(err){
                res.status(500).send(err);
            }else{
                dados.type_id = result.insertId;
                res.status(201).json(dados);
            }

        });

    });


}