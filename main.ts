let list: number[] = []
function doSomething (list: any[]) {
    return 0
}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) == 1) {
        list = [
        pins.digitalReadPin(DigitalPin.P1),
        pins.digitalReadPin(DigitalPin.P2),
        pins.digitalReadPin(DigitalPin.P3),
        pins.digitalReadPin(DigitalPin.P4),
        pins.digitalReadPin(DigitalPin.P5),
        pins.digitalReadPin(DigitalPin.P6),
        pins.digitalReadPin(DigitalPin.P7),
        pins.digitalReadPin(DigitalPin.P8),
        pins.digitalReadPin(DigitalPin.P9),
        pins.digitalReadPin(DigitalPin.P10),
        pins.digitalReadPin(DigitalPin.P11),
        pins.digitalReadPin(DigitalPin.P12),
        pins.digitalReadPin(DigitalPin.P13),
        pins.digitalReadPin(DigitalPin.P14),
        pins.digitalReadPin(DigitalPin.P15),
        pins.digitalReadPin(DigitalPin.P16)
        ]
    }
})
