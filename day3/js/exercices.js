//  Factorielle 
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Factorielle 
function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

//  Suite de Fibonacci 
function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

// Vérifier si un nombre est premier
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Recherche linéaire
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Recherche binaire 
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// Tri par sélection
function selectionSort(arr) {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[j] < sorted[minIndex]) {
        minIndex = j;
      }
    }
    [sorted[i], sorted[minIndex]] = [sorted[minIndex], sorted[i]];
  }
  return sorted;
}

// Trouver le 2e plus grand élément
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}

// les exemples
console.log("Factorielle (itératif) de 5:", factorialIterative(5));
console.log("Factorielle (récursif) de 5:", factorialRecursive(5));
console.log("Fibonacci (10 termes):", fibonacci(10));
console.log("7 est premier ?", isPrime(7));
console.log("Recherche linéaire de 3:", linearSearch([5, 3, 8, 1], 3));
console.log("Recherche binaire de 6:", binarySearch([1, 3, 5, 6, 8], 6));
console.log("Tri par sélection:", selectionSort([4, 2, 1, 5, 3]));
console.log("2e plus grand dans [10, 4, 6, 8]:", secondLargest([10, 4, 6, 8]));
