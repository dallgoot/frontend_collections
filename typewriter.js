function TypeWriter(selector, phrases, interval, loop) {
    var target = document.querySelector(selector);// HTML element that will contain the text
    if (!target) console.error("Selector '" + selector + "' is empty");

    var interval = interval || 100,//time between each letters
        pauseTime = 1000, // time between each phrase
        Typer = function (phrase, callbackOnEnd) {
            this.pointer = 0;
            this.phrase = phrase;
            this.callbackOnEnd = callbackOnEnd;
        };
    Typer.prototype.target = target;
    Typer.prototype.update = function () {
        if (this.pointer === 0) {
            this.target.innerText = '';
        }
        if (this.target.innerText !== this.phrase) {
            this.target.innerText += this.phrase.charAt(this.pointer++);
        } else {
            clearInterval(this.intervalObject);
            if (this.callbackOnEnd) {
                setTimeout(this.callbackOnEnd, pauseTime);
            }
        }
    };
    var setupTyper = function (callback, phrase) {
        var t = new Typer(phrase, callback);
        return function() {
             t.intervalObject = setInterval(t.update.bind(t), interval);
        };
    };
    var onLoop = function () {
        TypeWriter(selector, phrases, interval, loop);
    };
    // the reducer function always return a Typer
    var starter = phrases.reverse().reduce(setupTyper, loop ? onLoop : null  /*the initial accumulator value*/);
    phrases.reverse();
    starter();
}

jQuery(document).ready( function($){
    if ($("#notepad")) {
        TypeWriter("#notepad", bandeaunews, 80, true);
    }
});