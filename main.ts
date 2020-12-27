input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.lightLevel() < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (input.lightLevel() > 15) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
