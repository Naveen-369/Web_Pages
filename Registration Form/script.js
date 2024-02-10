verify=()=>{
    let fing=document.getElementById("Pass").value;
    var lowerCase = /[a-z]/;
    var upperCase = /[A-Z]/;
    var digit = /[0-9]/;
    var specialChar = /[@$!%*#?&]/;
    let flag=0;
    //Test for uppercas lowercase and the special character
    if (!lowerCase.test(fing)) flag=1;
    if (!upperCase.test(fing)) flag=1;
    if (!digit.test(fing)) flag=1;
    if (!specialChar.test(fing)) flag=1;
    if (fing.length < 8 || fing.length > 12) flag=1;
    
    // If all criteria are met
    if(flag==1){
        alert("Please enter a valid Password ! ! ! ! ");
        window.location.reload();
    }
    else{
        let a=confirm("The form cannot be edited after this point, Are you sure you want to submit?");
        if(a)
            window.location.href="index.html";
    }
    

}