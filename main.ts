let intensité = 0
function bleu () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function blanc () {
    pins.digitalWritePin(DigitalPin.P1, 244)
    pins.digitalWritePin(DigitalPin.P2, 242)
    pins.digitalWritePin(DigitalPin.P8, 245)
}
function mauve () {
    pins.digitalWritePin(DigitalPin.P1, 161)
    pins.digitalWritePin(DigitalPin.P2, 66)
    pins.digitalWritePin(DigitalPin.P8, 245)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
basic.forever(function () {
    intensité = pins.analogReadPin(AnalogPin.P0)
    if (intensité >= 700) {
        vert()
    } else if (intensité < 700 && intensité >= 600) {
        bleu()
    } else if (intensité < 400 && intensité >= 350) {
        rouge()
    } else if (intensité < 350 && intensité >= 300) {
        mauve()
    } else {
        blanc()
    }
})
