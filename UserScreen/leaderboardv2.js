let scores = [
    {name: "Player 1", score: 300},
    {name: "Player 2", score: 370},
    {name: "Player 3", score: 500},
    {name: "Player 4", score: 430},
    {name: "Player 5", score: 340},
];

function updateLeaderboardView() {
    let leaderboard = document.getElementById("leaderboard");
    leaderboard.innerHTML = "";

    scores.sort(function(a, b){return b.score - a.score;})
    let elements = []; // we'll need created elements to update colors later on
    // create elements for each player

    for(let i=0; i<scores.length; i++) {
        let number = document.createElement("p");
        number.classList.add("p");
        let name = document.createElement("span");
        name.classList.add("name");
        let score = document.createElement("span");
        score.classList.add("score");
        number.innerText = (i + 1) + ".";
        name.innerText = scores[i].name;
        score.innerText = scores[i].score;

        let scoreRow = document.createElement("div");
        scoreRow.classList.add("row");
        scoreRow.appendChild(number);
        scoreRow.appendChild(name);
        scoreRow.appendChild(score);
        leaderboard.appendChild(scoreRow);

        elements.push(scoreRow);
    }
}

updateLeaderboardView();