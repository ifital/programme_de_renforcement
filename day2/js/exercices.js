// Supprimer les doublons d’un tableau 
function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}


// Compter les voyelles dans une chaîne 
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').reduce((count, char) => vowels.includes(char) ? count + 1 : count, 0);
}

// Trouver les éléments communs entre deux tableaux 
function findCommons(arr1, arr2) {
  return arr1.reduce((acc, val) => {
    if (arr2.includes(val) && !acc.includes(val)) {
      acc.push(val);
    }
    return acc;
  }, []);
}

// Créer un tableau de carrés à partir d’un tableau de nombres 
function squareArray(arr) {
  const squares = [];
  arr.forEach(num => squares.push(num * num));
  return squares;
}

// Trier un tableau sans utiliser sort() 
function customSort(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let inserted = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] < result[j]) {
        result.splice(j, 0, arr[i]);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Grouper les éléments identiques d’un tableau en objets 
function groupByFrequency(arr) {
  const freq = {};
  arr.forEach(el => {
    freq[el] = freq[el] ? freq[el] + 1 : 1;
  });
  return freq;
}

// les exemples
console.log("Jour 1 :", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("Jour 2 :", countVowels("Hello World"));
console.log("Jour 3 :", findCommons([1, 2, 3, 4], [3, 4, 5, 6]));
console.log("Jour 4 :", squareArray([1, 2, 3, 4]));
console.log("Jour 5 :", customSort([4, 2, 5, 1, 3]));
console.log("Jour 6 :", groupByFrequency(['a', 'b', 'a', 'c', 'b', 'a']));
