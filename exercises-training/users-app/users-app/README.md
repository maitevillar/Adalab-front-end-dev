## ENUNCIADO FACEBOOK 2.0

Tengo que conectarme al server para trareme de la BBDD un listado de usuarios para pintarlos en mi web.
Flujo:
Al inicio de mi aplicación me conectaré a la urlbase que me han proporcionado (recomendable instalarse en chrome la extensión JSON formater para ver cómo son los datos que nos llegan, ver cómo acceder a los objetos y sus propiedades...), una vez me hayan llegado los datos guardaré esos datos en una variable y llamaré a una función que los pinte.

Debo pintar la imagen de mi usuario y su nombre
Al hacer click en él debo guardarme su id en mi array de amigos (friends), mira que los datos que te llegan de la api ya tienen un id que es un objeto, cualquiera de las dos propiedades de este onjeto te pueden servir como identificador.