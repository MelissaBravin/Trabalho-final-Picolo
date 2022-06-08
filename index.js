var express = require("express");
var app = express();
var { livro } = require("./models");
var { autor } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/livros", async function(req, res){
  var visualizar = await livro.findAll();
  res.json(visualizar);
});

app.get("/livros/:id", async function(req, res){
  var mostrar = await livro.findOne({where: {id: req.params.id}});
  res.json(mostrar);
});

app.get("/livros/:id/autores", async function(req, res){
  var mostrar = await livro.findByPk (req.params.id, {
    include: 'autores'
});
  res.json(mostrar.autor);
});

app.post("/livros", async function(req, res){
   var visualizar = await livro.create(req.body);
  res.json(visualizar);
});

app.put("/livros/:id", async function(req, res){
   var visualizar = await livro.update(req.body,{where: {id: req.params.id}});
  res.json(visualizar);
});

app.delete("/livros/:id", async function(req, res){
   var visualizar = await livro.destroy({where: {id: req.params.id}});
  res.json(visualizar);
});

//autor

app.get("/autores", async function(req, res){
  var visualizar = await autor.findAll();
  res.json(visualizar);
});

app.get("/autores/:id", async function(req, res){
  var mostrar = await autor.findOne({where: {id: req.params.id}});
  res.json(mostrar);
});

app.get("/autores/:id/livro", async function(req, res){
  var mostrar = await autor.findByPk (req.params.id, {
    include: 'livro'
});
  res.json(mostrar.livro);
});

app.post("/autores", async function(req, res){
   var visualizar = await autor.create(req.body);
  res.json(visualizar);
});

app.put("/autores/:id", async function(req, res){
   var visualizar = await autor.update(req.body,{where: {id: req.params.id}});
  res.json(visualizar);
});

app.delete("/autores/:id", async function(req, res){
   var visualizar = await autor.destroy({where: {id: req.params.id}});
  res.json(visualizar);
});
app.listen(3000, function(){
  console.log("Está rodando!");
});
