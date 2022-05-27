//import navbar
import navbar from "./components/navbar.js"; 
document.getElementById('navbar').innerHTML = navbar();

//redirect to homepage page when hit logo in navbar
document.getElementById('homelogo').addEventListener("click", ()=>
{
    window.location.href="index.html";
});


//import footer
import footer from "./components/footer.js";
document.getElementById('footer').innerHTML = footer();

//show user name 
var registeredUSer = JSON.parse(localStorage.getItem('userDataBase')) || [];

document.getElementById('signin').innerText = registeredUSer[registeredUSer.length - 1].usrnm1;






//get hotels data
var data = JSON.parse(localStorage.getItem("data")) || [];

//create arr to store add to cart information in localStorage 
var cartArr = JSON.parse(localStorage.getItem('cartItems')) || [];

window.addEventListener('load', function () {
    displaySortedData(data);
})



//append data
var appendHotelData = (data) => {

    //when filter hapens old data will be erased
    document.getElementById("append").innerHTML=""

    data.map((el) => {

        

        var div = document.createElement('div');
        div.id = "maindiv";

        var div1 = document.createElement('div');
        div1.id = "leftdiv";

        var div2 = document.createElement('div');
        div2.id = "middlediv";

        var div3 = document.createElement('div');
        div3.id = "rightdiv";

        var img = document.createElement('img');
        img.src = el.image;

        var nm = document.createElement('h3');
        nm.innerText = el.name;
        nm.id = "nm"

        var city = document.createElement('p');
        city.innerText = "Rajkot";

        var refund = document.createElement('p');
        refund.innerText = "Fully Refundable";

        var rate = document.createElement('h4');
        rate.innerText = `${el.rating}/5`;
        rate.id = "rate";

        var prc = document.createElement('h3');
        prc.innerText = `₹ ${el.price}`;
        prc.id = "prc";


        div1.append(img);
        div2.append(nm, city, refund, rate);
        div3.append(prc);

        div.append(div1, div2, div3);
        document.getElementById("append").append(div);



        //give addEventListener to this button
        div.addEventListener('click', function () {
            //passing whole object of perticular product to addToCart function
            addToCart(el);
        });
        
        function addToCart(el) {
            //   console.log(el);

            //push perticular product data in cartArr;
            cartArr.push(el);
            //set to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartArr));
            alert("Added To The Booking , Please Complete The Payment Process");
        }

    });
}
appendHotelData(data);



var check1 = document.querySelector("input[name=check1]");
check1.addEventListener("change", () => {
  let filterdata = data.filter(function (elem) {
    if (elem.fac == "Hot Tub") {
      return elem;
    }
  });
  console.log(filterdata)
  appendHotelData(filterdata)
});


//sort
document.getElementById("sorting").addEventListener("change",handlesorting);

function handlesorting()
{

//get select tag option value
var selected=document.getElementById('sorting').value;


//for price sort
if(selected=="phigh")
{
    //for descending order
    data.sort(function (a,b)
    {
        return b.price-a.price;
    });
}

else if(selected=="plow")
{
    //for ascending order
    data.sort(function (a,b)
    {
        return a.price-b.price;
    });
}

//for rating sort
else if(selected=="rhigh" || selected=="rec")
{
    //for descending order
    data.sort(function (a,b)
    {
        return b.rating-a.rating;
    });
}

else if(selected=="rlow")
{
    //for ascending order
    data.sort(function (a,b)
    {
        return a.rating-b.rating;
    });
}
//passing sorted data
displaySortedData(data);
};





function displaySortedData(data)
{
document.getElementById('append').innerHTML="";

data.map(function (el)
{
    var div = document.createElement('div');
        div.id = "maindiv";

        var div1 = document.createElement('div');
        div1.id = "leftdiv";

        var div2 = document.createElement('div');
        div2.id = "middlediv";

        var div3 = document.createElement('div');
        div3.id = "rightdiv";

        var img = document.createElement('img');
        img.src = el.image;

        var nm = document.createElement('h3');
        nm.innerText = el.name;
        nm.id = "nm"

        var city = document.createElement('p');
        city.innerText = "Rajkot";

        var refund = document.createElement('p');
        refund.innerText = "Fully Refundable";

        var rate = document.createElement('h4');
        rate.innerText = `${el.rating}/5`;
        rate.id = "rate";

        var prc = document.createElement('h3');
        prc.innerText = `₹ ${el.price}`;
        prc.id = "prc";


        div1.append(img);
        div2.append(nm, city, refund, rate);
        div3.append(prc);

        div.append(div1, div2, div3);
        document.getElementById("append").append(div);



        //give addEventListener to this button
        div.addEventListener('click', function () {
            //passing whole object of perticular product to addToCart function
            addToCart(el);
        });
        
        function addToCart(el) {
            //   console.log(elem);

            //push perticular product data in cartArr;
            cartArr.push(el);
            //set to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartArr));
            alert("Added To Booking Successfully");
        }
});
}



//import countryCode 
import countryCode from "./components/countryCode.js";
document.getElementById('option').innerHTML = countryCode();




//filter
var check1 = document.querySelector("input[name=check1]");
check1.addEventListener("change", () => {
  let filterdata = data.filter(function (elem) {
    if (elem.fac == "Hot Tub") {
      return elem;
    }
  });
//   console.log(filterdata)
  appendHotelData(filterdata);
});


var check2 = document.querySelector("input[name=check2]");
check2.addEventListener("change", () => {
  let filterdata = data.filter(function (elem) {
    if (elem.fac == "Spa") {
      return elem;
    }
  });
  appendHotelData(filterdata);
});


var check3 = document.querySelector("input[name=check3]");
check3.addEventListener("change", () => {
  let filterdata = data.filter(function (elem) {
    if (elem.fac == "Free Wifi") {
      return elem;
    }
  });
  appendHotelData(filterdata);
});


var check4 = document.querySelector("input[name=check4]");
check4.addEventListener("change", () => {
  let filterdata = data.filter(function (elem) {
    if (elem.fac == "Air conditioned") {
      return elem;
    }
  });
  appendHotelData(filterdata);
});