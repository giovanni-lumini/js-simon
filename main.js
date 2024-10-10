/* 
Descrizione:
1-Visualizzare in pagina 5 numeri casuali.
2-Da lì parte un timer di 30 secondi.
3-Dopo 30 secondi:
    3.1-i numeri scompaiono 
    3.2-appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
4-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/

//1-Visualizzare in pagina 5 numeri casuali. (FATTO)
let num_random1 = document.getElementById("num_random1");
let num_random2 = document.getElementById("num_random2");
let num_random3 = document.getElementById("num_random3");
let num_random4 = document.getElementById("num_random4");
let num_random5 = document.getElementById("num_random5");
let container_num = document.getElementById("container_num");
let container_imput = document.getElementById("container_imput");

let random_1 = Math.floor(Math.random() * 11);
let random_2 = Math.floor(Math.random() * 11);
let random_3 = Math.floor(Math.random() * 11);
let random_4 = Math.floor(Math.random() * 11);
let random_5 = Math.floor(Math.random() * 11);

num_random1.innerHTML = random_1;
num_random2.innerHTML = random_2;
num_random3.innerHTML = random_3;
num_random4.innerHTML = random_4;
num_random5.innerHTML = random_5;

//2-Da lì parte un timer di 30 secondi. (FATTO)
const clock = setTimeout (my_function, 3000);

//3-Dopo 30 secondi:
//3.1-i numeri scompaiono (FATTO)
//3.2-appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
function my_function (){
    container_num.style.display = "none";
    container_imput.style.display = "block";
}
//4-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.