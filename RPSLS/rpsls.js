let gameStarted = false;

function startGame() {
  document.getElementById('start-overlay').style.display = 'none';
  gameStarted = true;
}

const rules = {
    Rock: ["Scissors", "Lizard"],
    Paper: ["Rock", "Spock"],
    Scissors: ["Paper", "Lizard"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"]
  };

const ruleDescriptions = {
    "Scissors:Paper": "Scissors cuts Paper",
    "Paper:Rock": "Paper covers Rock",
    "Rock:Lizard": "Rock crushes Lizard",
    "Lizard:Spock": "Lizard poisons Spock",
    "Spock:Scissors": "Spock smashes Scissors",
    "Scissors:Lizard": "Scissors decapitates Lizard",
    "Lizard:Paper": "Lizard eats Paper",
    "Paper:Spock": "Paper disproves Spock",
    "Spock:Rock": "Spock vaporizes Rock",
    "Rock:Scissors": "(as it always has) Rock crushes Scissors",
    "Rock:Rock": "Rock ties Rock",
    "Scissors:Scissors": "Scissors ties Scissors",
    "Lizard:Lizard": "Lizard ties Lizard",
    "Spock:Spock": "Spock ties Spock",
    "Paper:Paper": "Paper ties Paper",
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
  
  