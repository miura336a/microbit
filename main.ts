// 受信プログラム
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 0) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
        `)
    } else if (receivedNumber == 2) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            . # . . .
        `)
    } else if (receivedNumber == 1) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . # .
        `)
    } else if (receivedNumber == 3) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, -100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, -100)
        basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
        `)
    }
    
})
radio.setGroup(5)
//  受信プログラム
radio.setGroup(5)
motobit.invert(Motor.Left, false)
motobit.invert(Motor.Right, true)
//  送信プログラム
//  loop関数をインスタンス化
basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(0)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
        `)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . # .
        `)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            . # . . .
        `)
    } else if (input.logoIsPressed()) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
        `)
    }
    
})
