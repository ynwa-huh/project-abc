
/*

     let a = 5;

     let b = 10;

     let result = a + b;

     console.log(result);




       let user = ['სახელი: don corleone', 'გვარი: daraselia', 'ტელეფონი: 599775577', 'იმეილი: example@example.com', 'ოჯახური მდგომარეობა: დაოჯახებული']

       console.log(user);


      2.	
        

            let vada = 6;

            vada+=6;

            let procenti = 12;

            for (vada = 6; vada < procenti.length; vada++) {
                alert()
            } 
          


            let amount = 1000;

            let month = 6;

            let percentage_1 = 100;

            let percentage_2 = 12;

            let payment_1 = (amount + month / 100 + amount) / month


            alert (payment_1)

            


            var x = 2000;

            var y = 6;

            if ( y<=6 ) {

                x = (x * 12 / 100);
                alert ("თქვენი გადასახდელი თანხა არის " + x + " ლარი")

            } else if ( 6 < y <=12 ) {

                x = (x * 24 / 100);
                alert ("თქვენი გადასახდელი თანხა არის " + x + " ლარი")
              
            } else {

                x = (x * 36 / 100);
                alert ("თქვენი გადასახდელი თანხა არის " + x  + " ლარი")
            }


function Myfunction() {

     alert ('gamarjoba punqcia');

 }    


 //

Myfunction();

*/
/*
function Myfunction(x, y) {

     let z = x * y;

     alert (z)

}

Myfunction(10, 15);


let multy = function (x, y)  {

     let z = x * y;

     alert(z);

}

multy(5, 10);

function Myfunction(x, y, func) {
    let j = func(x);
    let z = j * y;
    alert(z);
}

function argfun(h) {
    let d = h * h;
    return d;
}

Myfunction(10, 15, argfun);



function Myfunction(x, y, blabla) {
  
    let j = blabla(x);
    let z = j * y;
  
    alert(z);
  
  }
  
  function argFun(h) {
  
    let d = h * h;
      
    return  d; 
  }
  




let but_1 = document.getElementById('But_1');

let buttons = document.getElementsByClassName('.buttons');

let buttons = document.getElementsByTagName('button');

let but_2 = document.querySelector('buttons');

let buttobs = document.querySelectorAll('buttons');

//ეს ხუთი საშუალება გვაქვს html ელემენტების დასასელექტებლად და მათზე სამოქმედოდ//

but_1.addEventListener('click', message);

function message() {

    alert('ღილაკზე დაჭერა');

}

console.log(buttons);

*/

let diva = document.querySelectorAll('.experiment');



for (var i = 0; i < diva.length; i++) {

        diva[i].addEventListener('mouseenter', changecolor);
        diva[i].addEventListener('mouseleave', changecolorgreen);

}

function changecolor() {

      this.style.backgroundColor = 'grey'

}

function changecolorgreen() {

    this.style.backgroundColor = 'green'

}

function cleanfc(){

      for (var i = 0; i < diva.length; i++){
          diva[i].style.backgroundColor = 'black';
      }

}

var btn = document.getElementsByClassName('rko');
btn.addEventListener('click', cleanfc);

/*
function message() {

    let experiment = document.querySelectorAll('.experiment');

    for (var i = 0; i < experiment.length; i++){
    experiment[i].style.backgroundColor = "grey";
    }
}

function message1() {

    let experiment = document.querySelectorAll('.experiment');

    for (var i = 0; i < experiment.length; i++){
    experiment[i].style.backgroundColor = "green";
    }
}
*/

