basic.clearScreen()
servos.P2.setAngle(0)
basic.forever(function () {
    basic.clearScreen()
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        servos.P2.setAngle(70)
        basic.showIcon(IconNames.Happy)
    } else {
        servos.P2.setAngle(0)
        basic.showIcon(IconNames.Asleep)
    }
})
