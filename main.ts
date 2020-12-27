input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "red") {
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (receivedString == "blue") {
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (receivedString == "green") {
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (receivedString == "off") {
        basic.showLeds(`
            # # # # #
            . # # # #
            . . # # #
            . . . # #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        strip.setBrightness(0)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
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
let strip: neopixel.Strip = null
radio.setGroup(255)
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
