function animarDibujo () {
    var tween1 = KUTE.fromTo('#Perro',{draw:'0% 3%'}, {draw:'90% 100%'},{duration: 7000, easing: "easingExponentialInOut", offset: 250}).start();
    var tween2 = KUTE.fromTo('#Huella',{draw:'0% 3%'}, {draw:'90% 100%'},{duration: 7000, easing: "easingExponentialInOut", offset: 250}).start();
}