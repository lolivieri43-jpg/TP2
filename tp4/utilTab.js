"use strict";

/* =====================================================
   TP8 – LES TABLEAUX
   BTS SIO – Bases JavaScript
   Fichier : utilTab.js
===================================================== */

/* =========================
   VARIABLES GLOBALES
   ⚠️ TOUJOURS AVANT LES FONCTIONS
========================= */

let N = parseInt(prompt("Combien de cases pour le tableau ?"));
let A = new Array(N);
let nbElemRempli = 0;

/* Message de contrôle */
console.log("TP8 chargé - Taille du tableau :", N);

/* =========================
   EXERCICE 1
========================= */
/**
 * Initialise toutes les cases du tableau à 0
 */
function initialiserTab1() {
    for (let i = 0; i < N; i++) {
        A[i] = 0;
    }
    nbElemRempli = N;
}

/* =========================
   EXERCICE 2
========================= */
/**
 * Initialise toutes les cases avec une valeur donnée
 */
function initialiserTab2(valeur) {
    for (let i = 0; i < N; i++) {
        A[i] = valeur;
    }
    nbElemRempli = N;
}

/* =========================
   EXERCICE 3
========================= */
/**
 * Remplit toutes les cases avec des valeurs aléatoires entre min et max inclus
 */
function remplirTab1(min, max) {
    for (let i = 0; i < N; i++) {
        A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    nbElemRempli = N;
}

/* =========================
   EXERCICE 4
========================= */
/**
 * Remplit nb cases à partir de la première case vide
 */
function remplirTab2(nb, min, max) {
    let i = nbElemRempli;

    while (i < N && nb > 0) {
        A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        i++;
        nb--;
        nbElemRempli++;
    }
}

/* =========================
   EXERCICE 5
========================= */
/**
 * Affiche uniquement les cases remplies
 */
function afficherTab1() {
    for (let i = 0; i < nbElemRempli; i++) {
        console.log("A[" + i + "] =", A[i]);
    }
}

/* =========================
   EXERCICE 6
========================= */
/**
 * Affiche toutes les cases du tableau
 */
function afficherTab2() {
    for (let i = 0; i < N; i++) {
        console.log("A[" + i + "] =", A[i]);
    }
}

/* =========================
   EXERCICE 7
========================= */
/**
 * Affiche les cases du tableau de deb à fin inclus
 */
function afficherTab3(deb, fin) {
    for (let i = deb; i <= fin && i < N; i++) {
        console.log("A[" + i + "] =", A[i]);
    }
}

/* =========================
   EXERCICE 8
========================= */
/**
 * Remplit la première case vide du tableau
 * @returns false si tableau plein, sinon nbElemRempli
 */
function remplirElement(valeur) {
    if (nbElemRempli >= N) {
        return false;
    }

    A[nbElemRempli] = valeur;
    nbElemRempli++;
    return nbElemRempli;
}

/* =========================
   EXERCICE 9
========================= */
/**
 * Permet à l'utilisateur de saisir des valeurs dans le tableau
 * @returns nbElemRempli
 */
function saisirTab() {
    while (nbElemRempli < N) {
        let val = prompt("Saisir une valeur (Annuler pour arrêter)");
        if (val === null) {
            break;
        }
        A[nbElemRempli] = val;
        nbElemRempli++;
    }
    return nbElemRempli;
}
