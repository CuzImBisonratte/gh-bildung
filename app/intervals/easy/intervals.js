const intervals = [
    { sound1: "c", sound2: "cs", interval: "do-ru" },
    { sound1: "c", sound2: "d", interval: "do-re" },
    { sound1: "c", sound2: "ds", interval: "do-mu" },
    { sound1: "c", sound2: "e", interval: "do-mi" },
    { sound1: "c", sound2: "f", interval: "do-fa" },
    { sound1: "c", sound2: "g", interval: "do-so" },
    { sound1: "c", sound2: "a", interval: "do-lu" },
    { sound1: "c", sound2: "a", interval: "do-la" },
    { sound1: "c", sound2: "as", interval: "do-lu" },
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
}

function submitAnswer(answer) {
    console.log(answer);
    console.log(currentInterval);
    if (answer == currentInterval) {
        rightNum++;
        document.getElementById("right_num").innerText = rightNum;
        document.getElementById("player").setAttribute("onclick", "play()");
    } else {
        document.getElementById("player").setAttribute("onclick", "play()");
    }
}