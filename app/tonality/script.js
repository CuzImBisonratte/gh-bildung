const intervals = ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "h", "c2", "cs2", "d2", "ds2", "e2"];

tonality = "";

function play() {
    // Get random number between 0 and intervals.length-7
    var intervalIndex = Math.floor(Math.random() * (intervals.length - 7));
    // Get 3 or 4 (random number)
    var semiTone1 = Math.floor(Math.random() * 2) + 3;
    // Get other number
    if (semiTone1 == 3) var semiTone2 = 4;
    else var semiTone2 = 3;
    // Create audio elements
    var base_tone = new Audio();
    var mid_tone = new Audio();
    var high_tone = new Audio();
    var tritone_base_tone = new Audio();
    var tritone_mid_tone = new Audio();
    var tritone_high_tone = new Audio();
    // Create source elements
    var base_tone_src = document.createElement("source");
    var mid_tone_src = document.createElement("source");
    var high_tone_src = document.createElement("source");
    var tritone_base_tone_src = document.createElement("source");
    var tritone_mid_tone_src = document.createElement("source");
    var tritone_high_tone_src = document.createElement("source");
    // Set source type
    base_tone_src.type = "audio/wav";
    mid_tone_src.type = "audio/wav";
    high_tone_src.type = "audio/wav";
    tritone_base_tone_src.type = "audio/wav";
    tritone_mid_tone_src.type = "audio/wav";
    tritone_high_tone_src.type = "audio/wav";
    // Set source path
    base_tone_src.src = "/notes/" + intervals[intervalIndex] + ".wav";
    mid_tone_src.src = "/notes/" + intervals[intervalIndex + semiTone1] + ".wav";
    high_tone_src.src = "/notes/" + intervals[intervalIndex + semiTone1 + semiTone2] + ".wav";
    tritone_base_tone_src.src = "/notes/" + intervals[intervalIndex] + ".wav";
    tritone_mid_tone_src.src = "/notes/" + intervals[intervalIndex + semiTone1] + ".wav";
    tritone_high_tone_src.src = "/notes/" + intervals[intervalIndex + semiTone1 + semiTone2] + ".wav";
    // Append audios
    base_tone.appendChild(base_tone_src);
    mid_tone.appendChild(mid_tone_src);
    high_tone.appendChild(high_tone_src);
    tritone_base_tone.appendChild(tritone_base_tone_src);
    tritone_mid_tone.appendChild(tritone_mid_tone_src);
    tritone_high_tone.appendChild(tritone_high_tone_src);
    // Play audio
    base_tone.play();
    window.setTimeout(function() {
        high_tone.play();
        window.setTimeout(function() {
            mid_tone.play();
            window.setTimeout(function() {
                tritone_base_tone.play();
                tritone_mid_tone.play();
                tritone_high_tone.play();
            }, 1500);
        }, 1000);
    }, 500);
    // Set tonality
    if (semiTone1 == 4) tonality = "dur";
    else tonality = "moll";
}