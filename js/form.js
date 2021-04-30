let money = document.querySelector(".js-money");
let formElement = document.querySelector(".js-form");
let select = document.querySelector(".js-form__select");
let form__paragraphResult = document.querySelector(".js-form__paragraph--result");
let form__paragraphCurrency = document.querySelector(".js-form__paragraph--currency");
let buttonReset = document.querySelector("js-form__buttonReset");
let buttonSubmit = document.querySelector("js-form__buttonSubmit");
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let finalResult = "Otrzymasz";
    let moneyValue = money.value;
    let selectValue = select.value;
    let euroRate = 4.54;
    let dolarRate = 3.79;
    let funtRate = 5.24;
    let jenRate = 0.035;

    let result;
    switch (selectValue) {
        case "euro":
            result = (moneyValue / euroRate).toFixed(2);
            form__paragraphResult.innerText = `${finalResult} ${result} euro.`;
            break;
        case "dolar":
            result = (moneyValue / dolarRate).toFixed(2);
            form__paragraphResult.innerText = `${finalResult} ${result} dolarów amerykańskch.`;
            break;
        case "funt":
            result = (moneyValue / funtRate).toFixed(2);
            form__paragraphResult.innerText = `${finalResult} ${result} funtów brytyjskich.`;
            break;
        case "jen":
            result = (moneyValue / jenRate).toFixed(2);
            form__paragraphResult.innerText = `${finalResult} ${result} jenów.`;
            break;
        default:
            form__paragraphResult.innerText = "Nasze serwery są przeciążone, spróbuj ponownie za chwilę :)";
    }
});

console.log("Witam wszystkich deweloperów w moim skromnym kalkulatorze walut");
