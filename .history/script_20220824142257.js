window.addEventListener('load', function(){
    const canvas = this.document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500

    class InputHandler{

    }

    class Projectile{

    }

    class Particle{
        constructor(game){
            this.game = game
            this.width = 120
            this.height = 190
            this.x = 20
            this.y = 100
        }

        update(){
            this.y += this.speedY
        }
        draw(context){

        }
    }

    class Player{

    }

    class Enemy{

    }

    class Layer{

    }

    class Background{

    }

    class UI{

    }

    class Game{

    }
})