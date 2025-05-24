<?php

namespace Models;

class Article {
    public int $id;
    public string $titre;
    public float $prix;

    public function __construct(int $id, string $titre, float $prix) {
        $this->id = $id;
        $this->titre = $titre;
        $this->prix = $prix;
    }
}
