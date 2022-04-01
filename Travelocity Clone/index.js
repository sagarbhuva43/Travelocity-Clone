//import countryCode 
import countryCode from "./components/countryCode.js";
document.getElementById('option').innerHTML = countryCode();


//import navbar
import navbar from "./components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();


//import footer
import footer from "./components/footer.js";
document.getElementById('footer').innerHTML = footer();



//redirect to signup page when hit signup in navbar
document.getElementById('signin').addEventListener("click", ()=>
{
    window.location.href="signin.html";
});

//redirect to homepage page when hit logo in navbar
document.getElementById('homelogo').addEventListener("click", ()=>
{
    window.location.href="index.html";
});





//redirect to hotels page when hit search button in homepage
document.getElementById('search').addEventListener("click", ()=>
{
    let destination=document.getElementById("des").value;
    let traveler=document.getElementById("prs").value;

    if(destination=="Rajkot" || destination=="rajkot" )
    {
        window.location.href="hotels.html";
    }
    //send person count to localstorage
    localStorage.setItem("person",traveler)
});









//show user name 
var registeredUSer=JSON.parse(localStorage.getItem('userDataBase')) || [];

document.getElementById('signin').innerText=registeredUSer[registeredUSer.length-1].usrnm1;
3



//add hotel data to localstorage
var data=JSON.parse(localStorage.getItem("data")) || [];
var hotelData=[
    {
        image:"https://images.trvl-media.com/hotels/28000000/27330000/27325200/27325153/0d01aecf.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Evergreen Palace",
        rev:"Good",
        price:Math.floor(Math.random()*3000)+800,      //price = 1200 to 3000
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Hot Tub"
    },

    {
        image:"https://images.trvl-media.com/hotels/7000000/6770000/6761400/6761385/dec020ae.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Platinum Hotel",
        rev:" Very Good",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Hot Tub"
    },

    {
        image:"https://images.trvl-media.com/hotels/11000000/10360000/10356700/10356685/9b50a0f4.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Fortune Hotel",
        rev:" Wonderful",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Hot Tub"
    },

    {
        image:"https://images.trvl-media.com/hotels/66000000/65350000/65346900/65346862/4dd5941a.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Siara Styles",
        rev:" Good",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Hot Tub"
    },

    {
        image:"https://images.trvl-media.com/hotels/28000000/27520000/27517100/27517033/6fdd2eaa.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Hotel Jyoti",
        rev:" Exceptional",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Spa"
    },

    {
        image:"https://images.trvl-media.com/hotels/39000000/38230000/38225800/38225721/a99dd946.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Sayaji Hotel",
        rev:"Very Good",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Spa"
    },

    {
        image:"https://images.trvl-media.com/hotels/12000000/11860000/11851800/11851757/25faa3f3.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Regency Lagoon resort",
        rev:"Exceptional",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Spa"
    },


    {
        image:"https://images.trvl-media.com/hotels/4000000/3310000/3302600/3302532/1038873d.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Silver Palace Hotel",
        rev:"exceptional",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Spa",
    },

    
    {
        image:"https://images.trvl-media.com/hotels/21000000/20080000/20070300/20070242/8ef99d0a.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Patria Suits",
        rev:"Wonderful",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Free Wifi"
    },

    
    {
        image:"https://images.trvl-media.com/hotels/70000000/69530000/69529400/69529389/935f96b3.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Aarya Lords Club And Resorts",
        rev:"Exceptional",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Free Wifi"
    },

    
    {
        image:"https://images.trvl-media.com/hotels/3000000/2800000/2796200/2796138/080e21c1.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Grand regency",
        rev:"Very Good",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Free Wifi"
    },

    
    {
        image:"https://images.trvl-media.com/hotels/6000000/5700000/5700000/5699979/460048ea.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Fern Residency",
        rev:"Good",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Free Wifi"
    },

    
    {
        image:"https://images.trvl-media.com/hotels/31000000/30330000/30328900/30328883/0e2881d1.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Nirali resorts",
        rev:"Very Good",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Air conditioned"
    },

    {
        image:"https://images.trvl-media.com/hotels/45000000/44830000/44820900/44820897/c74cff6d.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"Hotel Royal Inn",
        rev:"Very Good",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Air conditioned"
    },

    {
        image:"https://images.trvl-media.com/hotels/20000000/19510000/19506400/19506376/e026b7df.jpg?impolicy=resizecrop&rw=455&ra=fit",
        name:"The Royal Castle Resorts",
        rev:"Very Good",
        price:Math.floor(Math.random()*3000)+800,  
        rating:((Math.random()*4)+1).toFixed(1), 
        fac:"Air conditioned"
    },

];

localStorage.setItem("data",JSON.stringify(hotelData))




//logout a button
document.getElementById("logout").addEventListener("click",()=>{

    localStorage.removeItem("userDataBase");

    // localStorage.removeItem("cartItems");

    location.reload();
})


