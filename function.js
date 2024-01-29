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
            window.open("https://www.npci.org.in/",'blank');
        },1500);
        setTimeout(() => {
            var inputContainer = document.getElementById("AppendHere");
            while (inputContainer.firstChild) {
                inputContainer.removeChild(inputContainer.firstChild);
            }
            var Remo = document.createElement('h5');
            Remo.innerHTML ="Redirecting to the UPI Unified Payment Page . . . . . . . . . ";
            Remo.className = "MessagetoCod";
            inputContainer.appendChild(Remo);
            window.open('https://www.npci.org.in/','blank');
        }, 3000); 
    });
});

//Declaration of the function for the cash on delivery
var paymentImages = document.querySelectorAll('.Payimg');
paymentImages.forEach((image)=>{
    image.addEventListener('click',()=>{
        Deleteimage();
        image.style.border = '2px solid green';
        var inputContainer = document.getElementById("AppendHere");
        var outputContainer= document.getElementById("wrapper");
        var Remo = document.createElement('h5');
        Remo.innerHTML ="Please Enter your Phone number for Customer Verification";
        Remo.className = "MessagetoCod";
        inputContainer.appendChild(Remo);
        var cardNumberInput = document.createElement('input');
        cardNumberInput.type = 'text';
        cardNumberInput.className = "cardNumberBox";
        cardNumberInput.placeholder = 'Enter your Mobile number';
        outputContainer.appendChild(cardNumberInput);

        var checkButton = document.createElement('button');
        checkButton.innerText = 'Place the Order';
        checkButton.addEventListener('click',()=>{
            var cardNumberValue = cardNumberInput.value.trim();

            if (cardNumberValue) {
                setTimeout(()=>{    var inputContainer = document.getElementById("AppendHere");
                    while (inputContainer.firstChild) {
                        inputContainer.removeChild(inputContainer.firstChild);
                    }
                    var Remo = document.createElement('h5');
                    Remo.innerHTML ="Your Order has been Placed Successfully ! ! !";
                    Remo.className = "MessagetoCod";
                    inputContainer.appendChild(Remo);},1000)
            } else {
                alert("Please enter the following details to proceed");
            }
        });
        outputContainer.appendChild(checkButton);
        
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

        var checkButton = document.createElement('button');
        checkButton.innerText = 'Proceed to Pay';
        checkButton.addEventListener('click',()=>{
            var cardNumberValue = cardNumberInput.value.trim();
            var cvvValue = cvvInput.value.trim();
            var expiryDateValue = expiryDateInput.value.trim();

            if (cardNumberValue && cvvValue && expiryDateValue) {
                window.open("https://www.paypal.com/in/signin",'blank');
            } else {
                alert("Please enter the following details to proceed");
            }
        });
        inputContainer.appendChild(checkButton);
    });
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
    var outputContainer=document.getElementById("wrapper");
        while (outputContainer.firstChild) {
            outputContainer.removeChild(outputContainer.firstChild);
        }
    var inpu=document.createElement("div");
    inpu.id="AppendHere";
    outputContainer.appendChild(inpu);
}
