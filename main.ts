let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia > 0 && distancia < 10) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 5)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 5)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
    }
})
