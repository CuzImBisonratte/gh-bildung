const intervals = ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "h", "c2", "cs2", "d2", "ds2", "e2"];

tonality = "";
rightAnswers = 0;

base_tone = "";
mid_tone = "";
high_tone = "";
tritone_base_tone = "";
tritone_mid_tone = "";
tritone_high_tone = "";
base_tone_src = "";
mid_tone_src = "";
high_tone_src = "";
tritone_base_tone_src = "";
tritone_mid_tone_src = "";
tritone_high_tone_src = "";

function play() {
    document.getElementById("player").style.filter = "grayscale(100%)";
    document.getElementById("player").removeAttribute("onclick");
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
                window.setTimeout(function() {
                    // Ungray buttons
                    document.getElementById("choose_dur").style.filter = "grayscale(0%)";
                    document.getElementById("choose_moll").style.filter = "grayscale(0%)";
                    document.getElementById("choose_dur").setAttribute("onclick", "chooseAnswer('dur')");
                    document.getElementById("choose_moll").setAttribute("onclick", "chooseAnswer('moll')");
                }, 1500);
            }, 1500);
        }, 500);
    }, 500);
}

prepareNewTones();

function chooseAnswer(tonalityAnswer) {
    if (tonality == "") return;
    if (tonality == tonalityAnswer) {
        rightAnswers++;
        document.getElementById("right_num").innerHTML = rightAnswers;
    } else {
        if (rightAnswers > 0) rightAnswers--;
        document.getElementById("right_num").innerHTML = rightAnswers;
    }
    tonality = "";
    prepareNewTones();
    // Gray out buttons
    document.getElementById("choose_dur").style.filter = "grayscale(100%)";
    document.getElementById("choose_moll").style.filter = "grayscale(100%)";
    document.getElementById("choose_dur").removeAttribute("onclick");
    document.getElementById("choose_moll").removeAttribute("onclick");
    document.getElementById("player").style.filter = "grayscale(0%)";
    document.getElementById("player").setAttribute("onclick", "play()");
}

function prepareNewTones() {
    // Get random number between 0 and intervals.length-7
    var intervalIndex = Math.floor(Math.random() * (intervals.length - 7));
    // Get 3 or 4 (random number)
    var semiTone1 = Math.floor(Math.random() * 2) + 3;
    // Get other number
    if (semiTone1 == 3) var semiTone2 = 4;
    else var semiTone2 = 3;
    // Create audio elements
    base_tone = new Audio();
    mid_tone = new Audio();
    high_tone = new Audio();
    tritone_base_tone = new Audio();
    tritone_mid_tone = new Audio();
    tritone_high_tone = new Audio();
    // Create source elements
    base_tone_src = document.createElement("source");
    mid_tone_src = document.createElement("source");
    high_tone_src = document.createElement("source");
    tritone_base_tone_src = document.createElement("source");
    tritone_mid_tone_src = document.createElement("source");
    tritone_high_tone_src = document.createElement("source");
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
    // Set tonality
    if (semiTone1 == 4) tonality = "dur";
    else tonality = "moll";
}