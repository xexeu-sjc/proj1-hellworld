serial.onDataReceived("R", function () {
    serial.writeLine("Hello,world")
    basic.pause(500)
})
led.enable(false)
