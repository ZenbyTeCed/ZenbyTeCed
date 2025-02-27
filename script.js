let pesoInput = document.getElementById("pesoInput");
let resultOutput = document.getElementById("resultOutput");

pesoInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.]/g, "");
});

document.querySelectorAll(".input-table button").forEach((button) => {
    button.addEventListener("click", function () {
        let pesoAmount = parseFloat(pesoInput.value);

        if (isNaN(pesoAmount) || pesoAmount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        let currencyType = button.textContent.trim();
        let convertedAmount = convertCurrency(currencyType, pesoAmount);

        resultOutput.textContent = convertedAmount.toFixed(2);
    });
});

function convertCurrency(currency, pesoAmount) {
    switch (currency) {
        case "American Dollar": return calculateAmerican(pesoAmount);
        case "Yen": return calculateYen(pesoAmount);
        case "Pound": return calculatePound(pesoAmount);
        case "Euro": return calculateEuro(pesoAmount);
        case "Rouble": return calculateRouble(pesoAmount);
        case "Yuan": return calculateYuan(pesoAmount);
        case "Brazilian Real": return calculateBrazil(pesoAmount);
        case "Sheqel": return calculateSheqel(pesoAmount);
        case "Krone": return calculateKrone(pesoAmount);
        default: return 0;
    }
}

function calculateAmerican(pesoAmount){
    return pesoAmount / 57.8795;
}

function calculateYen(pesoAmount){
    return pesoAmount / 0.0067;
}

function calculatePound(pesoAmount){
    return pesoAmount / 1.2648;
}

function calculateEuro(pesoAmount){
    return pesoAmount / 1.0494;
}

function calculateRouble(pesoAmount){
    return pesoAmount / 0.0119;
}

function calculateYuan(pesoAmount){
    return pesoAmount / 0.1378;
}

function calculateBrazil(pesoAmount){
    return pesoAmount / 0.1740;
}

function calculateSheqel(pesoAmount){
    return pesoAmount / 1.1184;
}

function calculateKrone(pesoAmount){
    return pesoAmount * 0.1410;
}
