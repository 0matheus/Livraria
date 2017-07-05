var app = require('./app_config.js');
var db = require('./db_config.js');

app.get('/', function (req, res) {

	res.end('Servidor On!');
});

app.get('/livros', function (req, res) {
	db.Livros.find({}, function(error, livros){
		if(error){
			res.json({error: 'Não foi possível retornar os livros'});			
		} else {
			res.json(livros);
		}
	});
});

app.get('/livros/:id', function (req, res) {

	var id = req.param('id');

	db.Livros.findById(id, function(error, livros){
		if(error){
			res.json({error: 'Não foi possível retornar o livro'});			
		} else {
			res.json(livros);
		}
	});


});

app.post('/livros', function (req, res) {

	var titulo = req.param('titulo');
	var autor = req.param('autor');
	var genero = req.param('genero');
	new Livros({
		'titulo': titulo,
		'autor': autor,
		'genero': genero,
		'created_at': new Date()
	}).save(function(error, livro) {
		if(error){
			res.json({error:  'Não foi possível salvar o livro.'});			
		} else {
			res.json(livro);
		}
	})
});

app.put('/livros', function (req, res) {

	var id = req.param('id');
	var titulo = req.param('titulo');
	var autor = req.param('autor');
	var genero = req.param('genero');

	db.Livros.findById(id, function(error, livro){
		if(titulo) { livro.titulo = livro;}
		if(autor) { livro.autor = autor;}
		if(genero) { livro.genero = genero;}

		livro.save(function(error, user) {
			if(error) {
				res.json({error: 'Não foi possível salvar o livro.'})
			} else {
				res.json(livro);
			}
		});
	});

});

app.delete('/livros/:id', function (req, res) {

	var id = req.param('id');

	db.Livros.findById(id, function(error, livro){

		if(error){
			res.json({error: 'Não foi possível deletar o livro.'});			
		} else {
			
			livro.remove(function(error){

				if(!error){
					res.json({response: 'Livro excluído com sucesso.'});
				}
			});
		}
	});


});