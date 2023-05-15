(function(window){

    var byeSpeaker = new Object();
    var speakWord = "Goodbye";
    byeSpeaker.speak = function(name){

             console.log(speakWord + " " + name);      
    };

      window.byeSpeaker = byeSpeaker;

})(window);