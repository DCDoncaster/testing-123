class Spaceship {

  static hangar = []

  constructor (health, shield) {
    this.health = health
    this.shield = shield
    this.xp = 0
    this.isDead = false
  }

  static collide (s1, s2) {
    s1.health *= 0.9
    s2.health *= 0.9
  }

  levelUp (x) {
    this.xp = Math.max(this.xp + x, 0)
  }

  takeDamage (y) {

    if (this.shield > 0 && y >= this.shield) {
      Spaceship.hangar.push(this)
    }

    if (y >= this.health + this.shield) {
      this.health = 0
      this.shield = 0
      this.isDead = true
    } else if (y >= this.shield) {
      this.health += (this.shield - y)
      this.shield = 0
    } else {
      this.shield += -y
    }
  }

}

class Xwing extends Spaceship {

  constructor (health, shield, basicSpeed) {
    console.log(health, shield, basicSpeed)
    super(health, shield)
    this.basicSpeed = basicSpeed
  }

  heal () {
    this.health += this.xp * 0.1
  }

  speed () {
    return this.basicSpeed * (this.shield === 0 ? 2 : 1)
  }

  levelUp (x) {
    super.levelUp(x)
    this.health += Math.max(x, 0)
  }

}

module.exports = {Spaceship, Xwing}