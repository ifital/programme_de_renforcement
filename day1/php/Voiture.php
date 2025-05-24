<?php

class Voiture {
    private $marque;
    private $modele;

    public function __construct($marque, $modele) {
        $this->marque = $marque;
        $this->modele = $modele;
    }

    public function demarrer() {
        echo "La voiture ".$this->marque." ".$this->modele. "démarre.<br>";
    }

    public function afficherInfos() {
        echo "Marque : ".$this->marque." <br>Modèle : ".$this->modele."<br>";
    }
}

$voiture1 = new Voiture("Toyota", "Corolla");
$voiture2 = new Voiture("Peugeot", "208");
$voiture3 = new Voiture("Tesla", "Model 3");

$voiture1->afficherInfos();
$voiture1->demarrer();

$voiture2->afficherInfos();
$voiture2->demarrer();

$voiture3->afficherInfos();
$voiture3->demarrer();

?>
