/*------------ Projet 2 : Le Quizz HP ------------*/

/* 

1/ Quel est le deuxième prénome de voldemort ?
a) Marvolo, b) Salazar, c) Morfin, d) Gellert

La réponse est : a) Marvolo

2/ Quel est le nom du gobelin qui accompagne Harry à Gringotts dans le tome 7 ?
a) Gripsec, b) Gornuk, c) Ragnok, d) Bogrod

La réponse est : a) Gripsek

3/ Quel est le nom complet de l'elfe de maison de la famille Black, qui sert ensuite Harry ?
a) Kreattur, b) Winky, c) Dobby, d) Hokey

La réponse est : a) Kreattur

4/ Quel est le prénom de la mère de Neville Londubat ?
a) Alice, b) Augusta, c) Andromeda, d) Amelia

La réponse est : a) Alice

5/ Quel est le nom du groupe de sorciers anti-mangemorts formé par Dumbledore avant l'Ordre du Phénix ?
a) Les Ailes de la Justice, b) Le Premier Ordre, c) L'Alliance des Sorciers, d) Le Club de la Licorne

La réponse est : b) Le premier Ordre */


const prompt = require('prompt-sync')()

let quizz = [
    ["Quel est le deuxième prénome de voldemort ?","1) Marvolo","2) Salazar","3) Morfin","4) Gellert", 1],
    ["Quel est le nom du gobelin qui accompagne Harry à Gringotts dans le tome 7 ?","1) Gripsec","2) Gornuk","3) Ragnok","4) Bogrod", 1 ],
    ["Quel est le nom complet de l'elfe de maison de la famille Black qui sert ensuite Harry ?","1) Kreattur","2) Winky","3) Dobby","3) Hokey", 1],
    ["Quel est le nom de la mère de Neville Londubat ?","1) Alice","2) Augusta","3) Andromeda","4) Amelia", 1],
    ["Quel est le nom du groupe de sorciers anti-mangemorts formé par Dumbeldore avant l'Ordre du Phénix ?","1) Les Ailes de la Justice","2) Le Premier Ordre","3) L'Alliance des Sorciers","4) Le Club de la Licorne", 2]
]

let score = 0;

for (let i = 0; i < quizz.length; i++) {
    console.log(quizz[i][0]);

    for (let j = 1; j < quizz[i].length - 1; j++) {
        console.log(quizz[i][j]);   
    }
    
    let reponse = Number(prompt("Votre reponse (a, b, c ou d) : "));
    if (parseInt(reponse) === quizz[i][5]){
        score++
        
    }else{
        console.log("Incorrect ! la reponse est : " + quizz[i][5]);
    }
}
console.log("Votre score final est : " + score + "/" + quizz.length);



