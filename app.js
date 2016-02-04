 var express = require('express');
 var port = process.env.PORT || 3000
 var app = express();
 app.set('views', './')  // views在本目录
 app.set('view engine', 'jade');
 app.listen(port);

 console.log('imooc started on part 3000'); 
