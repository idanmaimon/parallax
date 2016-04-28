process.env.PORT =  process.env.PORT || process.argv[2] || 3000;

var express = require('express'),
    app = express();


//app.use(express.static('./dist',{index:"index.html"}));
app.use(express.static('index.html',{index:"index.html"}));


app.listen(process.env.PORT,function(){
	console.log("Listening on port "+process.env.PORT);
});