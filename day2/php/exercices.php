<?php

// Propriétés privées + Getters/Setters
class Voiture {
    private string $marque;
    private int $vitesse;

    public function __construct(string $marque, int $vitesse) {
        $this->marque = $marque;
        $this->vitesse = $vitesse;
    }

    public function getMarque(): string {
        return $this->marque;
    }

    public function setMarque(string $marque): void {
        $this->marque = $marque;
    }

    public function getVitesse(): int {
        return $this->vitesse;
    }

    public function setVitesse(int $vitesse): void {
        $this->vitesse = $vitesse;
    }
}

// Classe Employe + Sous-classe Manager
class Employe {
    protected string $nom;
    protected float $salaire;

    public function __construct(string $nom, float $salaire) {
        $this->nom = $nom;
        $this->salaire = $salaire;
    }

    public function presentation(): string {
        return "Je suis $this->nom, je gagne $this->salaire €.";
    }
}

class Manager extends Employe {
    private float $bonus;

    public function __construct(string $nom, float $salaire, float $bonus) {
        parent::__construct($nom, $salaire);
        $this->bonus = $bonus;
    }

    // Surcharge (override) de presentation()
    public function presentation(): string {
        $total = $this->salaire + $this->bonus;
        return "Je suis le manager $this->nom, je gagne $total € avec bonus.";
    }
}

// Hiérarchie Animal → Chien / Chat
class Animal {
    protected string $nom;

    public function __construct(string $nom) {
        $this->nom = $nom;
    }

    public function parler(): string {
        return "Je suis un animal.";
    }
}

class Chien extends Animal {
    public function parler(): string {
        return "$this->nom dit : Wouf !";
    }
}

class Chat extends Animal {
    public function parler(): string {
        return "$this->nom dit : Miaou !";
    }
}

// Tester la visibilité (private vs protected)
class TestVisibilite {
    private string $priv = "Privé";
    protected string $prot = "Protégé";

    public function getPriv(): string {
        return $this->priv;
    }

    public function getProt(): string {
        return $this->prot;
    }
}

class Fille extends TestVisibilite {
    public function afficher(): void {
        echo $this->prot;   
    }
}

//  Tests 
echo "=== Voiture ===\n";
$v = new Voiture("Toyota", 120);
echo $v->getMarque() . " roule à " . $v->getVitesse() . " km/h\n";

echo "\n=== Employe / Manager ===\n";
$e = new Employe("Alice", 2500);
$m = new Manager("Bob", 3000, 1000);
echo $e->presentation() . "\n";
echo $m->presentation() . "\n";

echo "\n=== Animal → Chien / Chat ===\n";
$chien = new Chien("Rex");
$chat = new Chat("Minou");
echo $chien->parler() . "\n";
echo $chat->parler() . "\n";

echo "\n=== Visibilité ===\n";
$f = new Fille();
$f->afficher();  
echo "\n";
?>
