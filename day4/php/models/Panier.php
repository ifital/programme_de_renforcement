<?php

namespace Models;

class Panier {
    private array $articles = [];

    public function ajouter(Article $article): void {
        $this->articles[$article->id] = $article;
    }

    public function supprimer(int $id): void {
        unset($this->articles[$id]);
    }

    public function lister(): array {
        return $this->articles;
    }
}
