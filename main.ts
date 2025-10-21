/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Andrew
 * Created on: Oct 2025
 * This program compares two numbers
*/

// variables
let randomNumber1: number = 0
let randomNumber2: number = 0

randomNumber1 = randint(0, 99)
randomNumber2 = randint(0, 99)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// show 1st number
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("1: " + randomNumber1.toString())
    basic.showIcon(IconNames.Happy)
})

// show 2nd number
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("2: " + randomNumber2.toString())
    basic.showIcon(IconNames.Happy)
})

// show comparison
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()

    // randomNumber compare
    if (randomNumber1 < randomNumber2) {
        basic.showString(randomNumber1.toString() + " < " + randomNumber2.toString())
    } else {
        basic.showString(randomNumber1.toString() + " > " + randomNumber2.toString())
    }

    // pasue and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
})













