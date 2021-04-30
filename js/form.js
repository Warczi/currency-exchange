
const calculateResult = (selectValue, moneyValue) => {
    const euroRate = 4.54;
    const dolarRate = 3.79;
    const funtRate = 5.24;
    const jenRate = 0.035;

    switch (selectValue) {
        case "EURO":
            return (moneyValue / euroRate).toFixed(2);

        case "USD":
            return (moneyValue / dolarRate).toFixed(2);

        case "FUNTÓW":
            return (moneyValue / funtRate).toFixed(2);

        case "JENÓW":
            return (moneyValue / jenRate).toFixed(2);
    }
};

const onFormSubmit = (Event) =>{

    Event.preventDefault();
    const money = document.querySelector(".js-money");
        const select = document.querySelector(".js-form__select");
        const form__paragraphResult = document.querySelector(".js-form__paragraph--result");

        const moneyValue = money.value;
        const selectValue = select.value;

        const result = calculateResult(selectValue, moneyValue);
        
        form__paragraphResult.innerHTML = ` Otrzymasz ${result} ${selectValue}`;

};
const init = () => {

    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit ); 
};
init();

console.log("Witam wszystkich deweloperów w moim skromnym kalkulatorze walut");
