//back arrow icon 
document.getElementById('arrow').addEventListener("click",()=>{
    window.location.href="index.html";
});


//create account
document.getElementById('createac').addEventListener("click",()=>{
    window.location.href="signup.html";
});



//validation
document.getElementById('signinbtn').addEventListener('click',signin);

    var registeredUSer=JSON.parse(localStorage.getItem('userDataBase')) || [];

    // console.log(registeredUSer)
   
    function signin(event)
    {
        event.preventDefault();

        var email=document.getElementById('email').value;
        var password=document.getElementById('password').value;

        var flag=false;
        for(var i=0;i<registeredUSer.length;i++)
        {
            if(registeredUSer[i].emailId==email && registeredUSer[i].pass==password)
            {
                alert('Sign In Successfully');
                flag=true;
            
                // document.getElementById('signin').innerText="xyz"

                window.location.href='index.html';
            }
        }

        if(flag==false) 
        {
            alert('Wrong Credential');
        }

    }



