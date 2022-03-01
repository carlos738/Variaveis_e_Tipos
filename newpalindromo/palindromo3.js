//solução 1
/*
function verificaPalindromo(string){
    if (!string) console.log("Entre com uma palavra válida.")
    
    console.log(string.split("").reverse().join("") === string)
    

}*/
verificaPalindromo("OSSO");
//VERIFICA SE A PALAVRA É UM PALINDROMO.

//solução 1.1

function verificaPalindromo(string) {
    if (!string) return "string inexistente";
    string.split().reverse().join("") === string;
}

    //verificaPalindromo2("ovo");
    console.log(verificaPalindromo("ovo"));

//solução 2
function verificaPalindromo3(string) {
    if (!string) return "string inexistente";

    for (let i=0; i < string.length/2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo3("abba"));
