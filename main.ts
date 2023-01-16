input.onButtonPressed(Button.A, function () {
    jugadorArriba.change(LedSpriteProperty.Y, -1)
    jugadorAbajo.change(LedSpriteProperty.Y, -1)
    basic.pause(500)
    jugadorArriba.change(LedSpriteProperty.Y, 1)
    jugadorAbajo.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    jugadorArriba.change(LedSpriteProperty.X, -1)
    jugadorArriba.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    jugadorArriba.change(LedSpriteProperty.X, -1)
    jugadorArriba.change(LedSpriteProperty.Y, -1)
})
let jugadorAbajo: game.LedSprite = null
let jugadorArriba: game.LedSprite = null
jugadorArriba = game.createSprite(1, 3)
jugadorAbajo = game.createSprite(1, 4)
let obstaculo = game.createSprite(4, 4)
basic.forever(function () {
    jugadorArriba.change(LedSpriteProperty.X, -1)
    basic.pause(500)
    if (obstaculo.get(LedSpriteProperty.X) == 0) {
        obstaculo.set(LedSpriteProperty.X, 4)
        obstaculo.set(LedSpriteProperty.Y, randint(3, 4))
    }
    if (obstaculo.isTouching(jugadorAbajo)) {
        game.gameOver()
    }
    if (obstaculo.isTouching(jugadorArriba)) {
        game.gameOver()
    }
})
