import Phaser from 'phaser'
import Game from 'game/scenes/Game'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: Game,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
      debug: true,
    },
  },
}

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config)
