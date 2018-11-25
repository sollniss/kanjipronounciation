var audio = [];
var next = null;
function playAudio(expression, reading) {
    if(audio.length == 0) { // no data yet
        var readings = reading.split(/ \/ |, /);
        for (var i = 0; i < readings.length; i++) {
        
            var url = "https://assets.languagepod101.com/dictionary/japanese/audiomp3.php?kanji=" + encodeURIComponent(expression);
            url += "&kana=" + encodeURIComponent(readings[i]);
            
            if (audio[i] == null)
            {
                (function (i) { //wrapper so we can use i
                    audio[i] = document.createElement('audio');
                    audio[i].src = url;
                    audio[i].onloadedmetadata = function() {
                        if(audio[i].duration == 5.694694){ // 404
                            audio[i] = null;
                        }
                    };
                    audio[i].onended = function() { // play next
                        for(var j = i+1; j <= readings.length; j++) {
                            if(audio[j]) {
                                var obj = audio[j];
                                next = setTimeout(function(){ obj.play(); }, 500);
                                return;
                            }
                        }
                    }
                    audio[i].onloadeddata = function() { // play first
                        for(var j = 0; j <= readings.length; j++) {
                            if(audio[j]) {
                                audio[j].play();
                                return;
                            }
                        }
                    }
               }(i));
            }
        }
    }
    else{ // we already have the data
        clearTimeout(next); // stop next from playing
        for(var s = 0; s <= audio.length; s++) { // stop current
            if(audio[s]) {
                audio[s].pause();
                audio[s].currentTime = 0;
            }
        }
        for(var k = 0; k <= audio.length; k++) { // start first valid
            if(audio[k]) {
                audio[k].play();
                return;
            }
        }
    }
    return;
}