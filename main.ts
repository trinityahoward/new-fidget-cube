let screen: number[] = []
max7219_matrix.setup(
1,
DigitalPin.P2,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
let strip = neopixel.create(DigitalPin.P8, 15, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.clear()
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        screen = max7219_matrix.getCustomCharacterArray(
        "B01000010,B11100111,B11111111,B11111111,B11111111,B01111110,B00111100,B00011000"
        )
    } else if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showString("UR NEXT")
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        strip.showRainbow(1, 360)
        strip.show()
        basic.pause(5000)
        basic.clearScreen()
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        screen = max7219_matrix.getCustomCharacterArray(
        "B01111110,B11111111,B10011001,B10011001,B11111111,B00111100,B00111100,B00111100"
        )
    } else {
        basic.clearScreen()
    }
})
