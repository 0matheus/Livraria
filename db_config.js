var db_string ='mongodb://localhost/livraria';
var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar ao banco!'));

db.once('open', function () {
	
	var userSchema = mongoose.Schema({
		titulo: String,
		autor: String,
		genero: String,
		created_at: Date
	});

	exports.Livros = mongoose.model('Livros', userSchema);

});
