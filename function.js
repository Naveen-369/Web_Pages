var paymentImages = document.querySelectorAll('.payment-image1');
paymentImages.forEach((image)=> {
    image.addEventListener('click', ()=>{
        Deleteimage();
        image.style.border = '2px solid green';
        var inputContainer = document.getElementById("AppendHere");
        while (inputContainer.firstChild) {
            inputContainer.removeChild(inputContainer.firstChild);
        }
        var Remo = document.createElement('h5');
        Remo.innerHTML ="Redirecting to UPI Payment Gateway. Please Enter your UPI ID ! ! !";
        Remo.className = "MessagetoUPI";
        inputContainer.appendChild(Remo);
        setTimeout(() => {
            prompt("Enter your UPI ID : ");
        },1500);
        
    });
});

//Declaration of the function for the cash on delivery
var paymentImages = document.querySelectorAll('.Payimg');
paymentImages.forEach((image)=>{
    image.addEventListener('click',()=>{
        Deleteimage();
        image.style.border = '2px solid green';
        var inputContainer = document.getElementById("AppendHere");
        while (inputContainer.firstChild) {
            inputContainer.removeChild(inputContainer.firstChild);
        }
        var Remo = document.createElement('h5');
        Remo.innerHTML ="Please Enter your Phone number for Customer Verification";
        Remo.className = "MessagetoCod";
        inputContainer.appendChild(Remo);

        
})})



//Declaration of the function for credit card processing
var paymentImages = document.querySelectorAll('.payment-image2');
paymentImages.forEach((image) => {
    image.addEventListener('click', () => {
        setTimeout(() => {
            console.log("Enter your card details");
        }, 1000);
        Deleteimage();
        image.style.border = '2px solid green';
        var inputContainer = document.getElementById("AppendHere");
        while (inputContainer.firstChild) {
            inputContainer.removeChild(inputContainer.firstChild);
        }
            
            var cardNumberInput = document.createElement('input');
            cardNumberInput.type = 'text';
            cardNumberInput.className = "cardNumberBox";
            cardNumberInput.placeholder = 'Enter your card number';
            inputContainer.appendChild(cardNumberInput);

            var cvvInput = document.createElement('input');
            cvvInput.type = 'text';
            cvvInput.className = "cvvBox";
            cvvInput.placeholder = 'Enter your CVV';
            inputContainer.appendChild(cvvInput);

            var expiryDateInput = document.createElement('input');
            expiryDateInput.type = 'text';
            expiryDateInput.className = "ExpiryDateBox";
            expiryDateInput.placeholder = 'Enter your Expiry Date';
            inputContainer.appendChild(expiryDateInput);
        }

    );
});



//Declaration of the function for the Restoring to previos state
Deleteimage = () => {
    var paymentImages = document.querySelectorAll('.payment-image2');
    paymentImages.forEach((image) => {
        image.style.border = 'none';
    });
    var paymentImages = document.querySelectorAll('.payment-image1');
    paymentImages.forEach((image) => {
        image.style.border = 'none';
    });
    var paymentImages = document.querySelectorAll('.Payimg');
    paymentImages.forEach((image) => {
        image.style.border = 'none';
    });
}
