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

let container_num = document.getElementById("container_num");
let container_imput = document.getElementById("container_imput");
let btn = document.getElementById("btn");

let random_1 = Math.floor(Math.random() * 11);
let random_2 = Math.floor(Math.random() * 11);
let random_3 = Math.floor(Math.random() * 11);
let random_4 = Math.floor(Math.random() * 11);
let random_5 = Math.floor(Math.random() * 11);

let array_random_numbers = [random_1, random_2, random_3, random_4, random_5];
container_num.innerHTML = array_random_numbers;
console.log(array_random_numbers);

//2-Da lì parte un timer di 30 secondi. (FATTO)
const clock = setTimeout(my_function, 3000);
//3-Dopo 30 secondi:
//3.1-i numeri scompaiono (FATTO)
function my_function() {
    container_num.style.display = "none";
    /* container_imput.style.display = "block"; */
    container_imput.classList.remove("d-none");
}

//3.2-appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
btn.addEventListener("click",user_numbers);

function user_numbers() {
    let n1 = document.getElementById("n1");
    n1_value = n1.value;
    let n2 = document.getElementById("n2");
    n2_value = n2.value;
    let n3 = document.getElementById("n3");
    n3_value = n3.value;
    let n4 = document.getElementById("n4");
    n4_value = n4.value;
    let n5 = document.getElementById("n5");
    n5_value = n5.value;
    let array_user_numbers = [n1_value, n2_value, n3_value, n4_value, n5_value];
    console.log(array_user_numbers);

    let array_num_indovinati = [];
    for (let i = 0; i <= array_user_numbers.length; i++){
        if (array_random_numbers.includes(array_user_numbers[i])){
            array_num_indovinati.push(array_user_numbers[i])
        } else {
            array_num_indovinati.push("X")
        }
    }
    console.log(array_num_indovinati);
    
        
}
//4-Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.