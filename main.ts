let list: number[] = []
let _1st_com = 0
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
        _1st_com = list.removeAt(15) * 1 + list.removeAt(14) * 2 + list.removeAt(13) * 4 + list.removeAt(12) * 8 + list.removeAt(11) * 16 + list.removeAt(10) * 32 + list.removeAt(9) * 64 + list.removeAt(8) * 128 + list.removeAt(7) * 256 + list.removeAt(6) * 512 + list.removeAt(5) * 1024 + list.removeAt(4) * 2048 + list.removeAt(3) * 4096 + list.removeAt(2) * 8192 + list.removeAt(1) * 16384 + list.removeAt(0) * 32768
    }
})
