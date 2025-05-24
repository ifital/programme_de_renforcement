<?php

// Interface commune
interface Paiement {
    public function payer(float $montant): string;
}

// Classe Carte de Crédit
class Carte implements Paiement {
    private string $numeroCarte;
    private string $titulaire;

    public function __construct(string $numeroCarte, string $titulaire) {
        $this->numeroCarte = $numeroCarte;
        $this->titulaire = $titulaire;
    }

    public function payer(float $montant): string {
        return "Paiement de $montant € effectué avec la carte de $this->titulaire.";
    }
}

// Classe PayPal
class Paypal implements Paiement {
    private string $email;

    public function __construct(string $email) {
        $this->email = $email;
    }

    public function payer(float $montant): string {
        return "Paiement de $montant € effectué via PayPal (compte : $this->email).";
    }
}

// Classe Bitcoin
class Bitcoin implements Paiement {
    private string $adresse;

    public function __construct(string $adresse) {
        $this->adresse = $adresse;
    }

    public function payer(float $montant): string {
        return "Paiement de $montant BTC envoyé à l'adresse Bitcoin : $this->adresse.";
    }
}

// Classe de traitement de paiement
class Transaction {
    public static function effectuerPaiement(Paiement $methode, float $montant): void {
        echo $methode->payer($montant) . "\n";
    }
}

// === TEST ===
echo "=== TEST DU SYSTÈME DE PAIEMENT ===\n";

$carte = new Carte("1234 5678 9876 5432", "Alice Dupont");
$paypal = new Paypal("alice@example.com");
$bitcoin = new Bitcoin("1BTCAddress123XYZ");

Transaction::effectuerPaiement($carte, 100.00);
Transaction::effectuerPaiement($paypal, 50.50);
Transaction::effectuerPaiement($bitcoin, 0.0042);
