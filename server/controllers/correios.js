module.exports = function(app){


  app.post('/correios/calculo-prazo', function(req, res){

    var dadosDaEntrega = req.body;

    var correiosSOAPClient = new app.services.correiosSOAPClient();
    
    correiosSOAPClient.calculaPrazo(dadosDaEntrega, function(error,result){
      if(error){
        res.status(500).send(erro);
        return;
      }
      console.log('prazo calculado:'+JSON.stringify(result));
    });



  });

}
