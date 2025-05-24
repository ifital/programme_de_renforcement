<?php

// Classe de base : Personne
class Personne {
    protected string $nom;
    protected string $prenom;
    protected int $age;

    public function __construct(string $nom, string $prenom, int $age) {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->age = $age;
    }

    public function presentation(): string {
        return "Je suis $this->prenom $this->nom, j'ai $this->age ans.";
    }
}

// Classe fille : Etudiant
class Etudiant extends Personne {
    private string $matricule;
    private array $notes = [];

    public function __construct(string $nom, string $prenom, int $age, string $matricule) {
        parent::__construct($nom, $prenom, $age);
        $this->matricule = $matricule;
    }

    public function ajouterNote(float $note): void {
        $this->notes[] = $note;
    }

    public function moyenne(): float {
        if (count($this->notes) === 0) return 0;
        return array_sum($this->notes) / count($this->notes);
    }

    public function presentation(): string {
        return parent::presentation() . " Mon matricule est $this->matricule et ma moyenne est " . number_format($this->moyenne(), 2);
    }
}

// Classe gestionnaire de la liste des étudiants
class GestionEleves {
    private array $etudiants = [];

    public function ajouterEtudiant(Etudiant $e): void {
        $this->etudiants[] = $e;
    }

    public function afficherTous(): void {
        foreach ($this->etudiants as $e) {
            echo $e->presentation() . "\n";
        }
    }
}

// === TEST ===
$gestion = new GestionEleves();

$e1 = new Etudiant("Dupont", "Alice", 21, "E1001");
$e1->ajouterNote(15);
$e1->ajouterNote(18);
$e1->ajouterNote(12);

$e2 = new Etudiant("Martin", "Jean", 22, "E1002");
$e2->ajouterNote(10);
$e2->ajouterNote(11);

$gestion->ajouterEtudiant($e1);
$gestion->ajouterEtudiant($e2);

$gestion->afficherTous();
