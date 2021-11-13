#受信プログラム
def on_received_number(receivedNumber):
    if receivedNumber == 0:
        motobit.enable(MotorPower.ON)
        motobit.set_motor_speed(Motor.LEFT, MotorDirection.FORWARD, 100)
        motobit.set_motor_speed(Motor.RIGHT, MotorDirection.FORWARD, 100)
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
        """)
    elif receivedNumber == 2:
        motobit.enable(MotorPower.ON)
        motobit.set_motor_speed(Motor.LEFT, MotorDirection.FORWARD, 100)
        motobit.set_motor_speed(Motor.RIGHT, MotorDirection.FORWARD, 50)
        basic.show_leds("""
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            . # . . .
        """)
    elif receivedNumber == 1:
        motobit.enable(MotorPower.ON)
        motobit.set_motor_speed(Motor.LEFT, MotorDirection.FORWARD, 50)
        motobit.set_motor_speed(Motor.RIGHT, MotorDirection.FORWARD, 100)
        basic.show_leds("""
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . # .
        """)
    elif receivedNumber == 3:
            motobit.enable(MotorPower.ON)
            motobit.set_motor_speed(Motor.LEFT, MotorDirection.FORWARD, -100)
            motobit.set_motor_speed(Motor.RIGHT, MotorDirection.FORWARD, -100)
            basic.show_leds("""
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
        """)
radio.on_received_number(on_received_number)

radio.set_group(5)
# 受信プログラム
radio.set_group(5)
motobit.invert(Motor.LEFT, False)
motobit.invert(Motor.RIGHT, True)
# 送信プログラム
# loop関数をインスタンス化

def on_forever():
    if input.button_is_pressed(Button.AB):
        radio.send_number(0)
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
        """)
    elif input.button_is_pressed(Button.A):
        radio.send_number(1)
        basic.show_leds("""
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . # .
        """)
    elif input.button_is_pressed(Button.B):
        radio.send_number(2)
        basic.show_leds("""
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            . # . . .
        """)
    elif input.logo_is_pressed():
        radio.send_number(3)
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
        """)
basic.forever(on_forever)
