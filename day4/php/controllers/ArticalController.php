<?php

namespace Controllers;

use Models\Article;

class ArticleController {
    private array $articles = [];

    public function __construct() {
        $this->articles[] = new Article(1, "Livre", 12.5);
        $this->articles[] = new Article(2, "Stylo", 1.2);
    }

    public function index(): array {
        return $this->articles;
    }

    public function get(int $id): ?Article {
        foreach ($this->articles as $article) {
            if ($article->id === $id) return $article;
        }
        return null;
    }
}
