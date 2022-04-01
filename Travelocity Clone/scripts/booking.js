 //back arrow icon 
 document.getElementById('arrow').addEventListener("click",()=>{
    window.location.href="hotels.html";
});

//get booked data from localStorage 
var cartArr = JSON.parse(localStorage.getItem('cartItems')) || [];


let appendData=(data)=>{

    data.map((el,index) => {
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
    
        var dlt=document.createElement("button");
        dlt.innerText="Remove";
        dlt.id="deletebtn"
    
        dlt.addEventListener('click',function()
        {
            deleteBtn(index)
        });
    
    
        div1.append(img);
        div2.append(nm, city, refund, rate);
        div3.append(dlt,prc);
    
        div.append(div1, div2, div3);
        document.getElementById("append").append(div);
    
    });
    
    function deleteBtn (index)
    {
        cartArr.splice(index,1);
    
        localStorage.setItem("cartItems",JSON.stringify(cartArr));
        appendData(cartArr);

        location.reload();
    
    }
    
};


appendData(cartArr);

//calculate the total amount of booking
var total=cartArr.reduce(function (ac,cv)
{
    return ac+cv.price;
},0);
//append total amount
document.getElementById('amount').innerText=`Total Amount = ₹ ${total}`;






