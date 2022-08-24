window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500

    class InputHandler {
        constructor(game) {
            this.game = game
            window.addEventListener('keydown', e => {
                if (((e.key === 'ArrowUp')
                    || (e.key === 'ArrowDown'))
                    && (this.game.keys.indexOf(e.key)) === -1) {
                    this.game.keys.push(e.key)
                } else if(e.key === ' '){
                    this.game.player.shootTop()
                }
            })
            window.addEventListener('keyup', e => {
                if (this.game.keys.indexOf(e.key) > -1) {
                    this.game.keys.splice(this.game.keys.indexOf(e.key), 1)
                }
            })
        }
    }

    class Projectile {
        constructor(game, x, y){
            this.game = game
            this.x = x
            this.y = y
            this.width = 10
            this.height = 10
            this.speed = 10
            this.markedForDeletion = false
        }

        update(){
            this.x += this.speed
            if(this.x > this.game.width * 0.9) this.markedForDeletion = true
        }

        draw(context){
            context.fillStyle = 'yellow'
            context.fillRect(this.x, this.y, this.width, this.height)
        }
    }

    class Player {
        constructor(game) {
            this.game = game
            this.width = 120
            this.height = 190
            this.x = 20
            this.y = 100
            this.speedY = 0
            this.maxSpeed = 2
            this.projectile = []
        }

        update() {
            if(this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed
            else if(this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed
            else this.speedY = 0
            this.y += this.speedY

            this.projectile.forEach(projectile => {
                projectile.update()
            })
            this.projectile = this.projectile.filter(projectile => !projectile.markedForDeletion)
        }
        draw(context) {
            context.fillStyle = 'black'
            context.fillRect(this.x, this.y, this.width, this.height)
            this.projectile.forEach(projectile => {
                projectile.draw(context)
            })
        }
        shootTop(){
            if(this.game.amo > 0){
                this.projectile.push(new Projectile(this.game, this.x + 80, this.y + 80))
                this.game.amo--
            }
        }
    }

    class Particle {

    }

    class Enemy {

    }

    class Layer {

    }

    class Background {

    }

    class UI {

    }

    class Game {
        constructor(width, height) {
            this.width = width
            this.height = height
            this.player = new Player(this)
            this.input = new InputHandler(this)
            this.keys = []
            this.amo = 20
        }
        update() {
            this.player.update()
        }
        draw(context) {
            this.player.draw(context)
        }
    }

    const game = new Game(canvas.width, canvas.height)
    let lastTime = 0
    function animate() {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.update()
        game.draw(ctx)
        requestAnimationFrame(animate)
    }
    animate()
})