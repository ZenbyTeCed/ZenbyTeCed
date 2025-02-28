let total = 0;
let totalPayout = document.getElementById("totalPayout");

function calculateTotal(price){
    total += price;
    totalPayout.textContent = `₱${total.toFixed(2)}`;
}

document.addEventListener("click", (event) =>{
    if(event.target.tagName === "BUTTON" && event.target.hasAttribute("data-price")){
        let price = parseFloat(event.target.getAttribute("data-price"));
        calculateTotal(price)
    }
});

function payNow(){
    if(total === 0){
        alert("No items selected. Choose at least one item.")
        return;
    }

    alert('Payment successful');
    total = 0;
    totalPayout.textContent = "₱0.00";
}

document.querySelector(".payout-table button").addEventListener("click", payNow);