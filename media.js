// media.js

// 4. Criamos um array chamado 'notas' que contém cinco números representando notas de alunos
let notas = [6, 8, 7, 9, 10];

// 5. Criamos uma variável 'soma' e inicializamos com 0. Ela vai acumular a soma das notas
let soma = 0;

// 6. Usamos um laço 'for...of' para percorrer cada nota do array
for (let nota of notas) {
    soma += nota; // Somamos a nota atual à variável 'soma'
}

// 7. Calculamos a média dividindo a soma pelo número de notas
let media = soma / notas.length;

// 8. Criamos um contador para verificar quantas notas são maiores que 7
let contador = 0;
for (let nota of notas) {
    if (nota > 7) { // Se a nota for maior que 7
        contador++;   // Incrementamos o contador
    }
}

// 9. Exibimos os resultados no console
console.log("Média das notas:", media);           // Mostra a média calculada
console.log("Quantidade de notas acima de 7:", contador); // Mostra quantas notas são maiores que 7