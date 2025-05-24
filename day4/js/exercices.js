// Valider une adresse e-mail simple avec RegExp
function validateEmail(email) {
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Générer toutes les permutations d’un mot
function generatePermutations(str) {
  if (str.length <= 1) return [str];
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const perms = generatePermutations(remaining);
    perms.forEach(p => result.push(current + p));
  }

  return result;
}

// Compter les pas pour atteindre zéro (ex : Collatz-like)
function numberSteps(num) {
  let steps = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    steps++;
  }
  return steps;
}

// Simuler un labyrinthe simple 
function canExitMaze(maze, start, end) {
  const [rows, cols] = [maze.length, maze[0].length];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= rows || y >= cols) return false;
    if (maze[x][y] === 1 || visited[x][y]) return false;
    if (x === end[0] && y === end[1]) return true;

    visited[x][y] = true;

    return dfs(x + 1, y) || dfs(x - 1, y) || dfs(x, y + 1) || dfs(x, y - 1);
  }

  return dfs(start[0], start[1]);
}

// Mini système de panier d'achat avec objets
function createCart() {
  const cart = [];

  return {
    addItem(item, price) {
      cart.push({ item, price });
    },
    removeItem(item) {
      const index = cart.findIndex(i => i.item === item);
      if (index !== -1) cart.splice(index, 1);
    },
    getTotal() {
      return cart.reduce((sum, i) => sum + i.price, 0);
    },
    showCart() {
      return cart;
    }
  };
}

// Détecter une boucle dans une suite (ex : Collatz)
function detectLoop(start) {
  const seen = new Set();
  let current = start;

  while (!seen.has(current)) {
    seen.add(current);
    if (current === 1) return false; 
    current = current % 2 === 0 ? current / 2 : 3 * current + 1;
  }

  return true;
}

// les exemples
console.log("Email valide ?", validateEmail("test@example.com")); 
console.log("Permutations de 'abc':", generatePermutations("abc"));
console.log("Pas pour atteindre zéro depuis 14 :", numberSteps(14)); 

const simpleMaze = [
  [0, 1, 0],
  [0, 0, 0],
  [1, 1, 0]
];
console.log("Sortie du labyrinthe possible ?", canExitMaze(simpleMaze, [0, 0], [2, 2]));

const cart = createCart();
cart.addItem("Livre", 10);
cart.addItem("Stylo", 2);
console.log("Contenu du panier :", cart.showCart());
console.log("Total :", cart.getTotal());
cart.removeItem("Livre");
console.log("Panier après suppression :", cart.showCart());

console.log("La suite depuis 6 boucle-t-elle ?", detectLoop(6)); 
