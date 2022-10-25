input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("Smile")
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
radio.setGroup(1)
