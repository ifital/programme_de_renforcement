function createQueue() {
  const queue = [];

  return {
    // Ajouter un élément à la fin de la file
    enqueue: function (element) {
      queue.push(element);
    },

    // Retirer l’élément en tête de la file
    dequeue: function () {
      if (queue.length === 0) {
        return "La file est vide.";
      }
      return queue.shift();
    },

    // Voir l’élément en tête de la file sans le retirer
    peek: function () {
      return queue.length > 0 ? queue[0] : "La file est vide.";
    },

    // Vérifier si la file est vide
    isEmpty: function () {
      return queue.length === 0;
    },

    // Afficher tous les éléments de la file
    print: function () {
      console.log("File d_attente :", queue.join(" ← "));
    }
  };
}

// Exemple d'utilisation :
const queue = createQueue();
queue.enqueue("Alice");
queue.enqueue("Bob");
queue.enqueue("Charlie");
queue.print(); 

console.log("Premier :", queue.peek()); 
console.log("Sortie :", queue.dequeue()); 
queue.print(); 
