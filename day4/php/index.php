<?php

require_once "autoload.php";

use Controllers\ArticleController;
use Models\Panier;

$ctrl = new ArticleController();
$panier = new Panier();

echo "=== Liste des articles ===\n";
foreach ($ctrl->index() as $article) {
    echo "- {$article->titre} ({$article->prix} €)\n";
}

echo "\n=== Ajout au panier ===\n";
$article = $ctrl->get(1);
if ($article) {
    $panier->ajouter($article);
}

echo "\n=== Contenu du panier ===\n";
foreach ($panier->lister() as $a) {
    echo "- {$a->titre} ({$a->prix} €)\n";
}
