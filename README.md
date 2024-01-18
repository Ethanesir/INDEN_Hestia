
# Projet innovation : Application Android 

## Contexte 

Cette application a été développée dans un contexte où les personnes qui resident en ehpad éprouvent un sentiment de solitude profond à cause de divers facteurs.

## Solution apportée 
Cette application Android a pour but d'offrir diverses fonctionnalités aux personnes résidents en ehpad. Elle fonctionne sur un réseau local, et a pour objectif d'ameliorerla qualité de vie de ces personnes en leur proposant un accès simple à plusieurs fonctionnalités: les messages, la météo, les actualités, etc.. 


## structure du projet
Les fichiers sources sont dans le langage JavaScript et l'utilisation de l'application ExpoGo est nécessaire afin d'avoir accès à l'interface de l'application.
L'utilisation de l'application nécessite que l'execution du projet se realise sur la meme connexion wifi que celle des utilisateurs.

Le projet est structuré selon la hiérarchie suivante:
```c

├── README.md.      //Contexte, problème, explication dela résolution du problème.
├── USER_MANUAL.md  //Explication de la logique de l'application
├── ROADMAP.md      //Explication de la roadMap 2023/2024
├── my-app          //L'application 
        ├── src                     // Contient les fichiers relatif au code de l'application
            ├──Page1.js             // Page relative à la météo. Affiche la météo de Rennes.
            ├──Page2.js             //Pour future implémentation 
            ├──Page3.js             //Pour future implémentation 
            ├──Page4.js             //Pour future implémentation 
            ├──Page5.js             //Gère le journal 
            ├──Page6.js             //Pour future implémentation
            ├──HomeScreen.js.       //Page qui s'affiche au démarrage
            |──AppNavigator.js     //Gère le changement de page
        ├── App.js //Application  
```

## Procédure d'installation
### initialisation 
<br>-Cette application nécessite pour le moment l'utilisation d'une application nommée "Expo Go" qui peut être téléchargées sur le play store par exemple.</br>
<br>-Ensuite, il faut cloner le répertoire suivant: ???</br>
<br>-Se déplacer dans INDEN_Hestia puis my-app</br>
-npm install ?????
### Lancement del'application 
depuis le répertoire my-app:
- lancer la commande npx expo start
- Scanner avec ExpoGo le QrCode
- Attendre



## Manuel d'utilisation
Voir fichier USER_MANUAL concernant la logique de l'application
