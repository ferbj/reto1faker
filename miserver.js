//miserver.js
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require ('lodash');

var generarUsuario = function(){
    var randomUid = faker.random.uuid();
    var randomName = faker.name.findName();
    var randomContent = faker.lorem.sentence();
    var randomDate = faker.date.recent();
    var randomImage = faker.image.imageUrl();
    return {
        id : randomUid,
        nombre:  randomName,
        contenido: randomContent,
        fecha: randomDate,
        imagen: randomImage
      }
}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/friends', function (req, res) {
    var cantidad = _.random(10,20)
    var usuarios = _.times(cantidad, generarUsuario)
    res.json(usuarios);
        
})

app.get('/amigos',function (req,res) {
    res.send('Mis Amigos');
})

app.listen(3000);