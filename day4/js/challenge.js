function playHangman(wordToGuess, maxTries = 6) {
  let guessedLetters = new Set();
  let incorrectTries = 0;
  const word = wordToGuess.toLowerCase();
  let displayedWord = "_".repeat(word.length).split("");

  console.log("🎮 Bienvenue au jeu du PENDU !");
  console.log(`Mot à deviner : ${displayedWord.join(" ")}`);
  console.log(`Vous avez droit à ${maxTries} erreurs.`);

  while (incorrectTries < maxTries && displayedWord.includes("_")) {
    const input = prompt("Entrez une lettre :").toLowerCase();

    if (!input || input.length !== 1 || !/[a-z]/.test(input)) {
      console.log("❗ Entrez une seule lettre valide.");
      continue;
    }

    if (guessedLetters.has(input)) {
      console.log("⚠️ Lettre déjà proposée !");
      continue;
    }

    guessedLetters.add(input);

    if (word.includes(input)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === input) displayedWord[i] = input;
      }
      console.log("✅ Bonne lettre !");
    } else {
      incorrectTries++;
      console.log(`❌ Mauvaise lettre ! Erreurs : ${incorrectTries}/${maxTries}`);
    }

    console.log(`Mot : ${displayedWord.join(" ")}`);
  }

  if (!displayedWord.includes("_")) {
    console.log(`🎉 Bravo ! Vous avez deviné le mot : ${word}`);
  } else {
    console.log(`💀 Perdu ! Le mot était : ${word}`);
  }
}

// Exemple de lancement du jeu 
playHangman("javascript");
