var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function hoverTinder(element) {
  element.setAttribute('src', '../images/Tinderv2.jpg');
}

function unhoverTinder(element) {
  element.setAttribute('src', '../images/Tinder.jpg');
}

function hoverAdvanced(element) {
  element.setAttribute('src', '../images/AdvancedV2.jpg');
}

function unhoverAdvanced(element) {
  element.setAttribute('src', '../images/Advanced.jpg');
}

function hoverWebsite(element) {
  element.setAttribute('src', '../images/WebsiteV2.jpg');
}

function unhoverWebsite(element) {
  element.setAttribute('src', '../images/Website.jpg');
}

function hoverBeauty(element) {
  element.setAttribute('src', '../images/BeautyV2.jpg');
}

function unhoverBeauty(element) {
  element.setAttribute('src', '../images/Beauty.jpg');
}

function hoverGOT(element) {
  element.setAttribute('src', '../images/GotNextV2.jpg');
}

function unhoverGOT(element) {
  element.setAttribute('src', '../images/GotNext.jpg');
}

function hoverWUI(element) {
  element.setAttribute('src', '../images/WUIV2.jpg');
}

function unhoverWUI(element) {
  element.setAttribute('src', '../images/WUI.jpg');
}

function hoverWUI(element) {
  element.setAttribute('src', '../images/WUIV2.jpg');
}

function unhoverSQA(element) {
  element.setAttribute('src', '../images/SQA.jpg');
}

function hoverSQA(element) {
  element.setAttribute('src', '../images/SQAV2.jpg');
}

function unhoverCOVID(element) {
  element.setAttribute('src', '../images/COVID.jpg');
}

function hoverCOVID(element) {
  element.setAttribute('src', '../images/COVIDV2.jpg');
}

function hoverPig(element) {
  element.setAttribute('src', '../images/PigGameV2.jpg');
}

function unhoverPig(element) {
  element.setAttribute('src', '../images/PigGame.jpg');
}

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    var is_touch_device = 'ontouchstart' in document.documentElement;
    if (is_touch_device) {
    var elements = document.getElementsByTagName("img");
    for (var i=0;i<elements.length;i++) {
        elements[i].onmouseover = null;
        elements[i].onmouseout = null;
    }
}
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000000}";
    document.body.appendChild(css);
};