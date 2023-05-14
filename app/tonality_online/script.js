const samples = [
    { tonality: "dur", path: "/samples/sample_1.mp3" },
    { tonality: "moll", path: "/samples/sample_2.mp3" },
    { tonality: "moll", path: "/samples/sample_3.mp3" },
    { tonality: "dur", path: "/samples/sample_4.mp3" },
    { tonality: "moll", path: "/samples/sample_5.mp3" },
    { tonality: "dur", path: "/samples/sample_6.mp3" },
    { tonality: "dur", path: "/samples/sample_7.mp3" },
    { tonality: "moll", path: "/samples/sample_8.mp3" },
    { tonality: "dur", path: "/samples/sample_9.mp3" },
    { tonality: "moll", path: "/samples/sample_10.mp3" },
    { tonality: "moll", path: "/samples/sample_11.mp3" },
    { tonality: "dur", path: "/samples/sample_12.mp3" },
    { tonality: "moll", path: "/samples/sample_13.mp3" },
    { tonality: "dur", path: "/samples/sample_14.mp3" },
    { tonality: "dur", path: "/samples/sample_15.mp3" }
];

tonality = "";
rightAnswers = 0;

function play() {
    // Deactivate button
    document.getElementById("player").style.filter = "grayscale(100%)";
    document.getElementById("player").removeAttribute("onclick");
    // Choose random sample
    sampleIndex = Math.floor(Math.random() * samples.length);
    sample = samples[sampleIndex];
    tonality = sample.tonality;
    // Play audio
    audio = new Audio();
    audio_src = document.createElement("source");
    audio_src.type = "audio/mpeg";
    audio_src.src = sample.path;
    audio.appendChild(audio_src);
    audio.play();
    // Ungray buttons
    window.setTimeout(function() {
        document.getElementById("choose_dur").style.filter = "grayscale(0%)";
        document.getElementById("choose_moll").style.filter = "grayscale(0%)";
        document.getElementById("choose_dur").setAttribute("onclick", "chooseAnswer('dur')");
        document.getElementById("choose_moll").setAttribute("onclick", "chooseAnswer('moll')");
    }, 1500);
}

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
    // Gray out buttons
    document.getElementById("choose_dur").style.filter = "grayscale(100%)";
    document.getElementById("choose_moll").style.filter = "grayscale(100%)";
    document.getElementById("choose_dur").removeAttribute("onclick");
    document.getElementById("choose_moll").removeAttribute("onclick");
    document.getElementById("player").style.filter = "grayscale(0%)";
    document.getElementById("player").setAttribute("onclick", "play()");
}