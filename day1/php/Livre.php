<?php

class Livre {
    private $titre;
    private $auteur;
    private $annee;

    public function __construct($titre, $auteur, $annee) {
        $this->titre = $titre;
        $this->auteur = $auteur;
        $this->annee = $annee;
    }

    public function resumer() {
        echo $this->titre. " est un livre écrit par ".$this->auteur. "en" .$this->annee."<br>";
    }
}

$livre1 = new Livre("Le Petit Prince", "Antoine de Saint-Exupéry", 1943);
$livre2 = new Livre("L'Étranger", "Albert Camus", 1942);

$livre1->resumer();
$livre2->resumer();

?>
