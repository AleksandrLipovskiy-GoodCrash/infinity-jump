import Phaser from 'phaser'
import background from 'assets/images/background/bg_layer1.png'
import platform from 'assets/images/environment/ground_grass.png'
import bunnyStand from 'assets/images/player/bunny1_stand.png'

export default class Game extends Phaser.Scene {
  player
  platforms
  cursors

  constructor() {
    super('game')
  }

  preload() {
    this.load.image('background', background)
    this.load.image('platform', platform)
    this.load.image('bunnyStand', bunnyStand)

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create() {
    this.add.image(240, 320, 'background').setScrollFactor(1, 0)

    this.platforms = this.physics.add.staticGroup()

    for (let i = 0; i < 5; ++i) {
      const x = Phaser.Math.Between(80, 400)
      const y = 150 * i

      const platform = this.platforms.create(x, y, 'platform')
      platform.setScale(0.5)

      const body = platform.body
      body.updateFromGameObject()
    }

    this.player = this.physics.add.sprite(240, 320, 'bunnyStand').setScale(0.5)

    this.physics.add.collider(this.platforms, this.player)

    this.player.body.checkCollision.up = false
    this.player.body.checkCollision.left = false
    this.player.body.checkCollision.right = false

    this.cameras.main.startFollow(this.player)
    this.cameras.main.setDeadzone(this.scale.width * 1.5)
  }

  update() {
    if (!this.player) {
      return
    }

    const touchingDown = this.player.body.touching.down
    if (touchingDown) {
      this.player.setVelocityY(-300)
    }

    if (this.cursors.left.isDown && !touchingDown) {
      this.player.setVelocityX(-200)
    } else if (this.cursors.right.isDown && !touchingDown) {
      this.player.setVelocityX(200)
    } else {
      this.player.setVelocityX(0)
    }

    this.platforms.children.iterate((child) => {
      const platform = child

      const scrollY = this.cameras.main.scrollY
      if (platform.y >= scrollY + 700) {
        platform.y = scrollY - Phaser.Math.Between(50, 100)
        platform.body.updateFromGameObject()
      }
    })

    this.horizontalWrap(this.player)
  }

  horizontalWrap(sprite) {
    const halfWidth = sprite.displayWidth * 0.5
    const gameWidth = this.scale.width
    if (sprite.x < halfWidth - sprite.displayWidth * 4) {
      sprite.x = gameWidth + halfWidth
    } else if (sprite.x > gameWidth + halfWidth) {
      sprite.x = -200
    }
  }
}
