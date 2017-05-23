/* global game, bootState */

var loadState = {
    preload: function () {
        //Agregar texto al juego
        this.labelloading = this.game.add.text(this.game.world.centerX + 0.5, //Posicion en X
                                     this.game.world.centerY - 15 + 0.5, //Posicion en Y
                                     'cargando...', //Texto
                                     { font: '30px Arial', fill: '#fff' }); //Estilo del texto
        //Establecer el punto de anclaje en el centro
        this.labelloading.anchor.setTo(0.5, 0.5);
 
        this.preloadingborder = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 15, 'loadingborder');
        this.preloadingborder.x -= this.preloadingborder.width / 2;
        this.preloading = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 19, 'loading');
        this.preloading.x -= this.preloading.width / 2;
        //Crear la barra de carga del juego
        this.game.load.setPreloadSprite(this.preloading, 1);//Sprite, direccion(0==horizontal, 1==vertical)
 
        this.game.load.image('title', 'assets/title.png');
        //Cargamos la hoja de imagenes con el ancho, el alto de cada sprite
        this.game.load.spritesheet('player', 'assets/player.png', 64, 64);
        //Segun el soporte del navegador se carga nuestro audio
        this.game.load.audio('explosion', ['audio/explosion.wav', 'audio/explosion.mp3']);
    },
    create: function () {
        //Generalmente llegamos a un menu
        this.game.state.start('menu');
        
        game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.start('boot');
    }
};


