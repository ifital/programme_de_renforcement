<?php

class User {
    private $login;
    private $motDePasse;

    public function __construct($login, $motDePasse) {
        $this->login = $login;
        $this->motDePasse = $motDePasse;
    }

    public function seConnecter($loginSaisi, $motDePasseSaisi) {
        if ($this->login === $loginSaisi && $this->motDePasse === $motDePasseSaisi) {
            echo "Connexion réussie pour l'utilisateur : ".$this->login."<br>";
        } else {
            echo "Échec de la connexion. Identifiants incorrects.<br>";
        }
    }
}

$user1 = new User("abdelali", "1234");

$user1->seConnecter("abdelali", "1234");   
$user1->seConnecter("abdelali", "0000");   
$user1->seConnecter("autre", "1234");      

?>
