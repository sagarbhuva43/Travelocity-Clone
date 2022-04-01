//already have an  account
document.getElementById('alreadyacc').addEventListener("click",()=>{
    window.location.href="signin.html";
});

//back arrow icon 
document.getElementById('arrow').addEventListener("click",()=>{
    window.location.href="signin.html";
});

//continue button
document.getElementById('signupbtn').addEventListener("click",()=>{
    window.location.href="aftersignup.html";
});



//validation
document.getElementById('signupbtn').addEventListener('click',formSubmit);

var userdataStack=JSON.parse(localStorage.getItem('userDataBase')) || [];

function formSubmit()
{
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var username1=document.getElementById('username1').value;
    var username2=document.getElementById('username2').value;

    
    var userData={
        emailId:email,
        pass:password,
        usrnm1:username1,
        usrnm2:username2,
    };
    
    userdataStack.push(userData);

    localStorage.setItem('userDataBase',JSON.stringify(userdataStack));

    alert('Sign Up Successfully')

    window.location.href='aftersignup.html';
}

