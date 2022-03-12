let list: number[] = []
pins.onPulsed(DigitalPin.P0, PulseValue.High, function () {
    list = [
    pins.digitalReadPin(DigitalPin.P1),
    pins.digitalReadPin(DigitalPin.P2),
    pins.digitalReadPin(DigitalPin.P3),
    pins.digitalReadPin(DigitalPin.P4),
    pins.digitalReadPin(DigitalPin.P5),
    pins.digitalReadPin(DigitalPin.P6),
    pins.digitalReadPin(DigitalPin.P7),
    pins.digitalReadPin(DigitalPin.P8)
    ]
})
basic.forever(function () {
	
})
