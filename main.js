//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello world!");

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 2;
const numberTwo = 3;
alert(`A soma dos números é: ${numberOne + numberTwo}`);

/*3. Crie um script que declare uma variável e verifique se o seu valor é um número.
Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/
const numberThree = 8;
const isNumber = typeof numberThree == "number" ? "É um número" : "Não é um número";
alert(isNumber);

/*4. Crie um script que declare uma variável e verifique se o seu valor é uma string.
Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/
const text = 8;
const isString = typeof text == "string" ? "É uma string" : "Não é uma string";
alert(isString);

/*5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.
Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/
const bool = true;
const isBoolean = typeof bool == "boolean" ? "É um boleano" : "Não é um boleano";
alert(isBoolean);

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const numberFour = 3;
const numberFive = 2;
alert(`A subtração dos números é: ${numberFour - numberFive}`);

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const numberSix = 2;
const numberSeven = 3;
alert(`A multiplicação dos números é: ${numberSix * numberSeven}`);

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const numberEight = 2;
const numberNine = 3;
alert(`A divisão dos números é: ${(numberEight / numberNine).toFixed(2)}`);

/*9. Crie um script que declare uma variável e verifique se o seu valor é um número par.
Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".*/
const numberTen = 12
const isPair = numberTen%2==0 ? "É um número par": "Não é um número par"
alert(isPair)

/*10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".*/
const numberEleven = 12
const isOdd = numberEleven%2!=0 ? "É um número ímpar": "Não é um número ímpar"
alert(isOdd)
