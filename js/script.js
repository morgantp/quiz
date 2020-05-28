var Slides = {
    currentSlide: 0,
    totalSlides: '',
    slideWidth: '',
    translateAmount: 0,
    container: $("#slides"),

    init: function(totalSlides) {
        var each;

        if(!totalSlides) throw new Error('Please pass the number of slides');
        Slides.totalSlides = totalSlides;
        Slides.loadContent();
        each = Slides.container.children('div');
        Slides.slideWidth = each.width() + (parseInt(each.css('margin-right'), 10));
        Slides.keyPress();
    },
    loadContent: function() {
        Slides.container.hide();
        for (var i = 0; i < Slides.totalSlides; i++) {
            $('<div id="#slide-' +i+ '"></div>')
            .load('slides/' +i+ '.html')
            .appendTo(Slides.container);
        }
        Slides.container.show();
    },
    keyPress: function() {
        $(document.body).keydown(function(e) {
            if(e.keyCode === 39 || e.keyCode === 37) {
                e.preventDefault();
                (e.keyCode === 39)?Slides.next():Slides.prev();
            }
        });
    },
    next: function() {
        if (Slides.currentSlide === 14) return;
        Slides.translateAmount -= Slides.slideWidth;
        Slides.updateHash(++Slides.currentSlide);
        Slides.animate();
    },
    prev: function() {
        if(Slides.translateAmount === 0) return;

        Slides.translateAmount += Slides.slideWidth;
        Slides.updateHash(--Slides.currentSlide);
        Slides.animate();
    },
    animate: function() {
        Slides.container
            .children()
                .css('-webkit-transform', 'translateX(' +Slides.translateAmount+ 'px)');

    },
    updateHash: function() {
        location.hash = '#slide-' +Slides.currentSlide;
    }
}

Slides.init(15);

// question 1 Boris Johnson

function borisAudio() {
    var boris = new Audio();
    boris.src = "audio/borisAudio.wav";
    boris.play();
}

function borisHint() {
    var text = document.getElementById("borisHint");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

// question 2 Jimmy Carr

function jimmyAudio() {
    var jimmy = new Audio();
    jimmy.src = "audio/jimmyAudio.wav";
    jimmy.play();
}

function jimmyHint() {
    var text = document.getElementById("jimmyHint");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

// question 3 Darth Vader

function darthAudio() {
    var darth = new Audio();
    darth.src = "audio/darthAudio.wav";
    darth.play();
}

function darthHint() {
    var text = document.getElementById("darthHint");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

// question 4 Morgan Freeman

function morganAudio() {
    var morgan = new Audio();
    morgan.src = "audio/morganAudio.wav";
    morgan.play();
}

function morganHint() {
    var text = document.getElementById("morganHint");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

// question 5 Kanye West

function godAudio() {
    var god = new Audio();
    god.src = "audio/godAudio.wav";
    god.play();
}

function godHint() {
    var text = document.getElementById("godHint");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

// bonus question Morgan Thomas-Price

function meAudio() {
    var me = new Audio();
    me.src = "audio/meAudio.wav";
    me.play();
}

function meHint() {
    var text = document.getElementById("meHint");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

// answer 1

function borisAnswer() {
    var img = document.getElementById("borisIMG");
    var answer = document.getElementById('borisName');
    if (img.style.display === "none") {
        img.style.display = "initial";
    } else {
        img.style.display = "none";
    }
    if (answer.style.display === "none") {
        answer.style.display = "initial";
    } else {
        answer.style.display = "none";
    }
}

// answer 2

function jimmyAnswer() {
    var img = document.getElementById("jimmyIMG");
    var answer = document.getElementById('jimmyName');
    if (img.style.display === "none") {
        img.style.display = "initial";
    } else {
        img.style.display = "none";
    }
    if (answer.style.display === "none") {
        answer.style.display = "initial";
    } else {
        answer.style.display = "none";
    }
}

// answer 3

function darthAnswer() {
    var img = document.getElementById("darthIMG");
    var answer = document.getElementById('darthName');
    if (img.style.display === "none") {
        img.style.display = "initial";
    } else {
        img.style.display = "none";
    }
    if (answer.style.display === "none") {
        answer.style.display = "initial";
    } else {
        answer.style.display = "none";
    }
}

// answer 4

function morganAnswer() {
    var img = document.getElementById("morganIMG");
    var answer = document.getElementById('morganName');
    if (img.style.display === "none") {
        img.style.display = "initial";
    } else {
        img.style.display = "none";
    }
    if (answer.style.display === "none") {
        answer.style.display = "initial";
    } else {
        answer.style.display = "none";
    }
}

// answer 5

function godAnswer() {
    var img = document.getElementById("godIMG");
    var answer = document.getElementById('godName');
    if (img.style.display === "none") {
        img.style.display = "initial";
    } else {
        img.style.display = "none";
    }
    if (answer.style.display === "none") {
        answer.style.display = "initial";
    } else {
        answer.style.display = "none";
    }
}

// bonus answer

function meAnswer() {
    var img = document.getElementById("meIMG");
    var answer = document.getElementById('meName');
    if (img.style.display === "none") {
        img.style.display = "initial";
    } else {
        img.style.display = "none";
    }
    if (answer.style.display === "none") {
        answer.style.display = "initial";
    } else {
        answer.style.display = "none";
    }
}