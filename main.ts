radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(73)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendString("en movimiento")
    } else {
        basic.clearScreen()
        radio.sendString("quieto")
    }
    basic.pause(5000)
})
