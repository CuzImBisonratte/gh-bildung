function intervalPlay(s1, s2) {
    // Create audio elements
    var audio1 = new Audio();
    var audio2 = new Audio();
    var audio2_2 = new Audio();
    // Create source elements
    var src1 = document.createElement("source");
    var src2 = document.createElement("source");
    var src2_2 = document.createElement("source");
    // Set source type
    src1.type = "audio/wav";
    src2.type = "audio/wav";
    src2_2.type = "audio/wav";
    // Set source path
    src1.src = "/tunes/" + s1 + ".wav";
    src2.src = "/tunes/" + s2 + ".wav";
    src2_2.src = "/tunes/" + s2 + ".wav";
    // Append audios
    audio1.appendChild(src1);
    audio2.appendChild(src2);
    audio2_2.appendChild(src2_2);
    // Play audio
    audio1.play();
    window.setTimeout(function() {
        audio2.play();
        window.setTimeout(function() {
            audio2_2.play();
            audio1.play();
        }, 1000);
    }, 1000);
}

const keys = ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "h", "c2", "cs2", "d2", "ds2", "e2"];
i = 0;
reverse = false;