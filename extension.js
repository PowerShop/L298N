({
    // L298N Motor Driver
    name : "L298N Motor",
    description : "L298N Motor Driver",
    author : "SmartMaker",
    category : "Motor",
    version : 1.0,
    icon : "/static/icon.png",
    color : "#f9c535",
    blocks : [
        "l298n_motor",
        "l298n_motor_set_speed",
        "l298n_motor_stop"
    ],
    supportArduinoPlatform: true,
    depends: [ ] // Arduino library
})