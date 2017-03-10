module.exports = (app)=>{

    app.post('/usertypes/usertype', (req, res)=>{

        req.assert("descricao","Descricao eh obrigatorio").notEmpty();
        var erros = req.validationErrors();

        if(erros){
            console.log("Erros de validacao encontrados");
            res.status(400).send(erros);
            return;
        }

        var connection = app.persistence.connectionFactory();
        var userTypeDAO = new app.persistence.UserTypeDAO(connection);

        var dados = req.body;
        dados.status =  'criado';

        console.log(dados);
        res.json(dados);


    });


}