/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global title, game */

//X, Y, nombre de la imagen cargada
this.game.add.image(10, 0, 'personajes1');
//X, Y y nombre de la imagen
this.player = this.game.add.sprite(20, 20, 'personajes1');
//Escalar objeto en X y Y
this.player.scale.set(0.5);
//Escalar individualmente
title.scale.x = 0.3;
title.scale.y = 0.8;
//Anclaje, punto de agarre del objeto en X y Y, 0 == Izquierda o Arriba y 1 == Derecha o Abajo
this.player.anchor.setTo(0.5, 0.5);
//Mover el objeto
this.player.x += 10;
this.player.y = 20;
//Rotar el objeto
this.player.rotation = 4;
this.player.angle = 180;
//... y muchas mas!
//X, Y, nombre de la imagen cargada
