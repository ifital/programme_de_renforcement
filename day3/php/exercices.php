<?php

// Classe abstraite Forme
abstract class Forme {
    abstract public function calculerSurface(): float;
}

// Héritage de Forme
class Carre extends Forme {
    private float $cote;

    public function __construct(float $cote) {
        $this->cote = $cote;
    }

    public function calculerSurface(): float {
        return $this->cote * $this->cote;
    }
}

class Cercle extends Forme {
    private float $rayon;

    public function __construct(float $rayon) {
        $this->rayon = $rayon;
    }

    public function calculerSurface(): float {
        return pi() * $this->rayon * $this->rayon;
    }
}

// Interface Connectable
interface Connectable {
    public function seConnecter(): string;
}

// Implémentation de Connectable
class Admin implements Connectable {
    public function seConnecter(): string {
        return "Connexion en tant qu'administrateur.";
    }
}

class Membre implements Connectable {
    public function seConnecter(): string {
        return "Connexion en tant que membre.";
    }
}

// Vérification instanceof
function verifierType($objet): string {
    if ($objet instanceof Forme) {
        return "C'est une forme.";
    } elseif ($objet instanceof Connectable) {
        return "C'est un utilisateur connectable.";
    } else {
        return "Type inconnu.";
    }
}

// Fonction qui utilise le polymorphisme
function afficherSurface(Forme $forme): string {
    return "Surface = " . number_format($forme->calculerSurface(), 2);
}

// === TEST ===

echo "=== Test des formes ===\n";
$carre = new Carre(5);
$cercle = new Cercle(3);

echo afficherSurface($carre) . "\n";    
echo afficherSurface($cercle) . "\n";    

echo "\n=== Test de l'interface Connectable ===\n";
$admin = new Admin();
$membre = new Membre();

echo $admin->seConnecter() . "\n";
echo $membre->seConnecter() . "\n";

echo "\n=== Test instanceof ===\n";
echo verifierType($carre) . "\n";     
echo verifierType($admin) . "\n";     
echo verifierType("texte") . "\n";   

?>
