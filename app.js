var express = require("express");
var app = express();


app.set('port', process.env.PORT || 8000);
app.set('view engine', 'ejs');
app.set('views', 'views');

app.locals.siteTitle = 'Marlen Awwad'; /*its gonna be a local variable available inside all my views*/

app.use(express.static('public'));

app.use(require('./routes/index'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));



var server = app.listen(app.get('port'), function(){
	console.log("Server is listening on port " + app.get('port'));
});





































