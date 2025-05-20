function fizzBuzz(limit = 100) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function plusGrand(tab) {
  let max = tab[0];
  for (let i = 1; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
}

function estPalindrome(mot) {
  const original = mot.toLowerCase();
  for (let i = 0; i < original.length / 2; i++) {
    if (original[i] !== original[original.length - 1 - i]) {
      return false;
    }
  }

  return true;
}


// 4. Somme des multiples de 3 ou 5 : Boucles + Conditions
function sommeMultiples3ou5(max = 1000) {
  let somme = 0;
  for (let i = 1; i < max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      somme += i;
    }
  }
  return somme;
}

// 5. Inverser une chaîne : Boucle + Tableau (split) + reverse
function inverserChaine(chaine) {
  let resultat = "";
  for (let i = chaine.length - 1; i >= 0; i--) {
    resultat += chaine[i];
  }

  return resultat;
}


// 6. Fréquence des lettres : Boucle + Objet comme tableau associatif
function frequenceLettres(chaine) {
  const freq = {};
  const texte = chaine.toLowerCase();
  for (let i = 0; i < texte.length; i++) {
    const char = texte[i];
    if (char >= 'a' && char <= 'z') { 
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
  }

  return freq;
}


// 7. Calculatrice : Conditions + Fonctions
function calculer(a, b, operateur) {
  if (operateur === '+') {
    return a + b;
  } else if (operateur === '-') {
    return a - b;
  } else if (operateur === '*') {
    return a * b;
  } else if (operateur === '/') {
    return b !== 0 ? a / b : "Erreur : division par zéro";
  } else {
    return "Opérateur non reconnu";
  }
}

console.log("1. FizzBuzz (jusqu'à 20)");
fizzBuzz(20);

console.log("\n2. Plus grand dans [4, 12, 3, 9]");
console.log(plusGrand([4, 12, 3, 9]));

console.log("\n3. Palindrome 'radar'");
console.log(estPalindrome("radar")); 

console.log("\n4. Somme des multiples de 3 ou 5 < 1000");
console.log(sommeMultiples3ou5());

console.log("\n5. Inverser 'javascript'");
console.log(inverserChaine("javascript"));

console.log("\n6. Fréquence des lettres dans 'Hello World'");
console.log(frequenceLettres("Hello World"));

console.log("\n7. Calculatrice 10 * 4");
console.log(calculer(10, 4, '*'));
