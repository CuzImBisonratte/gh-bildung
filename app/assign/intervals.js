const intervals = [
    { interval: "do-ru", numeric: "k2" },
    { interval: "do-re", numeric: "g2" },
    { interval: "do-mu", numeric: "k3" },
    { interval: "do-mi", numeric: "g3" },
    { interval: "do-fa", numeric: "4" },
    { interval: "do-so", numeric: "5" },
    { interval: "do-lu", numeric: "k6" },
    { interval: "do-la", numeric: "g6" },
    { interval: "do-tu", numeric: "k7" },
    { interval: "do-ti", numeric: "g7" }
];

currentIntervalIndex = 0;
rightAnswers = 0;
lastIntervalIndex = 0;

function newInterval() {
    lastIntervalIndex = currentIntervalIndex;
    while (currentIntervalIndex == lastIntervalIndex) currentIntervalIndex = Math.floor(Math.random() * intervals.length);
    document.getElementById("interval-display").innerText = intervals[currentIntervalIndex].numeric;
}
newInterval();

function submitAnswer(interval) {
    if (interval === intervals[currentIntervalIndex].interval) {
        rightAnswers++;
    } else {
        if (rightAnswers > 0) rightAnswers--;
    }
    document.getElementById("right_num").innerText = rightAnswers;
    newInterval();
}