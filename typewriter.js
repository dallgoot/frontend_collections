    function TypeWriter(selector, phrases, interval, loop) {
        var target = document.querySelector(selector);// HTML element that will contain the text
        if (!target) throw new Error ("Selector '"+selector+"' is empty");

        var interval = interval || 100;//time between each letters
        var loop = loop || false;
        var pauseTime = 1000; // time between each phrase
        var Typer = function() {
            if(this.pointer === 0) this.target.innerHTML = '';
            if(this.target.innerHTML !== this.phrase) {
                this.target.innerHTML += this.phrase.charAt(this.pointer++);
            } else {
                clearInterval(this.intervalObject);
                if (this.callbackOnEnd) setTimeout(this.callbackOnEnd, pauseTime);
            }
        };
        var setupTyper = function (phrase, callback) {
            var typerObject = { target: target,
                                phrase: phrase,
                                pointer: 0,
                                callbackOnEnd : callback };
            return function() { typerObject.intervalObject = setInterval(Typer.bind(typerObject), interval); };
        };
        phrases.reverse().reduce(function(callback, phrase) { return setupTyper(phrase, callback);}, // the reducer function always return a Typer
                                 loop ? function(){ TypeWriter(selector, phrases.reverse(), interval, loop) } : false  //the initial accumulator value
                                 )();
    }

    TypeWriter("#notepad", ['comment ça va les mauristes?', 'la pèche dans le confinement ?', '3ème phrase', '4ème phrase'], 80, true);