function osszead (num1: number, num2: number) {
    osszeg = 0
    osszeg = num1 + num2
    return osszeg
}
let osszeg = 0
let teljes_osszeg = 0
for (let index = 0; index <= 10; index++) {
    basic.showNumber(index)
    if (index < 10) {
        basic.showString("+")
    } else {
        basic.showString(" = ")
    }
    teljes_osszeg = osszead(teljes_osszeg, index)
    basic.pause(1000)
}
basic.showNumber(teljes_osszeg)
basic.forever(function () {
	
})
