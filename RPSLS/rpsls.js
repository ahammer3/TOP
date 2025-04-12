let gameStarted = false;

function startGame() {
  document.getElementById('start-overlay').style.display = 'none';
  gameStarted = true;
}

const rules = {
    Danny: ["Sal", "Vinny"],
    Jason: ["Danny", "Channy"],
    Sal: ["Jason", "Vinny"],
    Vinny: ["Channy", "Jason"],
    Channy: ["Sal", "Danny"]
  };

const ruleDescriptions = {
    "Sal:Jason": "Sal loses hope for Jason",
    "Jason:Danny": "Jason calls out on Danny",
    "Danny:Vinny": "Danny reverse jinxes Vinny",
    "Vinny:Channy": "Vinny trolls Channy",
    "Channy:Sal": "Channy disgusts Sal with a food story",
    "Sal:Vinny": "Sal piles on work for Vinny",
    "Vinny:Jason": "Vinny steals Jason's ace",
    "Jason:Channy": "Jason confuses Channy",
    "Channy:Danny": "Channy ignores Danny",
    "Danny:Sal": "(as it always has) Danny b8s Sal",
    "Danny:Danny": "Danny speaks to himself",
    "Sal:Sal": "Sal plays soccer by himself",
    "Vinny:Vinny": "Vinny is ALL G by himself",
    "Channy:Channy": "Channy makes another taco by himself",
    "Jason:Jason": "Jason trapped in his woes by himself",
  };

  let yourScore = 0;
  let cpuScore = 0;
  const winningScore = 5;


  function logRule(winner, loser) {
    const key = `${winner}:${loser}`;
    const description = ruleDescriptions[key];
    if (description) {
      const log = document.getElementById('rule-log');
      const entry = document.createElement('div');
      entry.textContent = description;
      log.appendChild(entry);
      log.scrollTop = log.scrollHeight; // auto-scroll to bottom
    }
  }


  function makeMove(playerChoice) {
    if (yourScore >= winningScore || cpuScore >= winningScore) return;
  
    document.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('selected-user', 'selected-cpu');
      });
  
    const choices = Object.keys(rules);
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];
  
    // Display selections
    document.getElementById('your-selection').innerText = "You: " + playerChoice;
    document.getElementById('cpu-selection').innerText = "CPU: " + cpuChoice;
  
    // Add highlight to selected buttons
    const playerBtn = document.getElementById(playerChoice.toLowerCase());
    const cpuBtn = document.getElementById(cpuChoice.toLowerCase());
  
    if (playerBtn) playerBtn.classList.add('selected-user');
    if (cpuBtn) cpuBtn.classList.add('selected-cpu');
  
    // Scoring
    if (playerChoice === cpuChoice) {
      // Tie
      logRule(playerChoice, cpuChoice);
    } else if (rules[playerChoice].includes(cpuChoice)) {
      yourScore++;
      logRule(playerChoice, cpuChoice);
    } else {
      cpuScore++;
      logRule(cpuChoice, playerChoice);
    }
  
    // Update scores
    document.getElementById('your-score').innerText = "Your Score: " + yourScore;
    document.getElementById('cpu-score').innerText = "CPU Score: " + cpuScore;
  
    // Check for game over
    if (yourScore >= winningScore || cpuScore >= winningScore) {
      const message = yourScore > cpuScore ? "Game Over - You Win!" : "Game Over - You Lose!";
      document.getElementById('game-over-message').innerText = message;
      document.getElementById('game-over-overlay').style.display = 'flex';
    }
  }
  
  