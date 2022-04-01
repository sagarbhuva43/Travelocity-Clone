document.getElementById('form').addEventListener("submit",(event)=>{
    event.preventDefault();

    let otp=document.getElementById('otp').value;
    if(otp=="")
    {
        alert("Your Cvv is 9546");
    }
})

document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    let otp=document.getElementById('otp').value;
    if(otp==9546)
    {
        alert("Your Booking Is Successful, Have Fun");
        window.location.href="index.html";
    }
})