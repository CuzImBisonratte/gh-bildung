const intervals = [
    { path: "/samples/sample_17.mp3", interval: "do-ru" },
    { path: "/samples/sample_18.mp3", interval: "do-re" },
    { path: "/samples/sample_19.mp3", interval: "do-mu" },
    { path: "/samples/sample_20.mp3", interval: "do-mi" },
    { path: "/samples/sample_21.mp3", interval: "do-fa" },
    { path: "/samples/sample_22.mp3", interval: "do-so" },
    { path: "/samples/sample_23.mp3", interval: "do-lu" },
    { path: "/samples/sample_24.mp3", interval: "do-la" },
    { path: "/samples/sample_25.mp3", interval: "do-tu" },
    { path: "/samples/sample_26.mp3", interval: "do-ti" }
];

currentInterval = "";
currentIntervalIndex = 0;
rightNum = 0;

function play() {
    // Play random interval
    currentIntervalIndex = Math.floor(Math.random() * intervals.length);
    sample = intervals[currentIntervalIndex];
    currentInterval = sample.interval;
    // Play audio
    audio = new Audio();
    audio_src = document.createElement("source");
    audio_src.type = "audio/mpeg";
    audio_src.src = sample.path;
    audio.appendChild(audio_src);
    audio.play();
    // Remove onclick event
    document.getElementById("player").removeAttribute("onclick");
    document.getElementById("player").style.display = "none";
    document.getElementById("player").innerHTML = 'Next <i class="fas fa-play"></i>';
}

function submitAnswer(answer) {
    console.log(answer);
    console.log(currentInterval);
    if (answer == currentInterval) {
        // Increase right answers
        rightNum++;
        document.getElementById("right_num").innerText = rightNum;
        // Hide and show elements
        document.getElementById("player").setAttribute("onclick", "play()");
        document.getElementById("player").style.display = "flex";
        document.getElementById("player_replay").style.display = "none";
    } else {
        // Hide and show elements
        document.getElementById("player").setAttribute("onclick", "play()");
        document.getElementById("player").style.display = "none";
        document.getElementById("player_replay").style.display = "flex";
    }
}

function replay() {
    var interval = intervals[currentIntervalIndex];
    intervalPlay(interval.sound1, interval.sound2);
}