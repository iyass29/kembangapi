function lingkaran(api) {
    var warna = randColor();
    var velocity = Math.random() * 2 + 6;
    var max = fireNumber * 8;
    for (var i = 0 ; i < max; i++) {
        var rad = (j * Math.PT * 2) / max;
        var firework ={
            x: firex, y: fire.y,
            size: Math.random() + 1.5,
            fill: color,
            vx: Math.cos(rad) * velocity + (Math.random() -0.5) * 0.5,
            vy: Math.sin(rad) * velocity + (Math.random() -0.5) * 0.5,
            ay: 0.05,
            life: Math.round((Math.random()* range) / 2) + range / 2
        };
    }
    return warna;
}