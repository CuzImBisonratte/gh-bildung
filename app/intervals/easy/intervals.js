const intervals = [
    { sound1: "c", sound2: "cs", interval: "do-ru" },
    { sound1: "c", sound2: "d", interval: "do-re" },
    { sound1: "c", sound2: "ds", interval: "do-mu" },
    { sound1: "c", sound2: "e", interval: "do-mi" },
    { sound1: "c", sound2: "f", interval: "do-fa" },
    { sound1: "c", sound2: "g", interval: "do-so" },
    { sound1: "c", sound2: "a", interval: "do-lu" },
    { sound1: "c", sound2: "a", interval: "do-la" },
    { sound1: "c", sound2: "as", interval: "do-tu" },
    { sound1: "c", sound2: "h", interval: "do-ti" }
];

currentInterval = "";
currentIntervalIndex = 0;
rightNum = 0;

function play() {
    // Play random interval
    var interval = intervals[Math.floor(Math.random() * intervals.length)];
    intervalPlay(interval.sound1, interval.sound2);
    currentInterval = interval.interval;
    currentIntervalIndex = intervals.indexOf(interval);
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