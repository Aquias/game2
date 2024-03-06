var player = "O"
var won = false;
function clickbox(Box){
  
    if(Box.innerText != "" || won ) return;
    Box.innerText = player;


  //  if(player == "O"){
   //     player = "X"

   // }
    //else{
     //   player = "O";
 //   }

    player == "O" ? player = "x" :player = "O";
    checkGame()

 //   a> b ? alert("максимум "+ a) : alert( "максимум" +b); 
 let number = 7;

 //if (number % 2 === 0) {
 //    alert("Число четное");
// } else {
 //    alert("Число нечетное");
 //}

 //x % 2=== 0? alert ("Число четное"): alert("Число нечетное");

// var grade = 75;

 //if (grade >= 60){
 //   alert("Проходной балл достигнут"); }
// else{
//    alert("Не проходной балл"); }
//    var grade = 75;
//    grade >= 60? alert("Проходной балл достигнут"):alert("Не проходной балл"); 
//var age = 20;

//if ( age>= 18){
 //   var legalStatus = "Совершеннолетний" ;
// }
// else {
//     var legalStatus = "Несовершеннолетний";
// }
// alert(legalStatus);

}

function checkGame (){
  //проверка строк
  for ( var i = 0;i <=2; i++){
  var first= document.getElementById(i +"_0").innerText;
  var second= document.getElementById(i +"_1").innerText;
  var third= document.getElementById(i +"_2").innerText;
  
  if (first =="") continue;

  if ( first==second && first == third){
    alert ("winner");
    won = true;
  }
  //проверка стольцов
  for ( var i = 0;i <=2; i++){
    var first= document.getElementById( i +"_0").innerText;
    var second= document.getElementById("1_" + i).innerText;
    var third= document.getElementById("2_" + i).innerText;
    
    if (first =="") continue;
  
    if ( first==second && first == third){
      alert ("winner");
      won = true;
    }
  }
}

  // проверка диагоналей
  var firstD2 = document.getElementById("0_2").innerText;
  var secondD2 = document.getElementById("1_1").innerText;
  var thirdD2 = document.getElementById("2_0").innerText;

  if (firstD2 !=""&& firstD2 == secondD2 && firstD2 == thirdD2){
    alert ("winner");
    won = true; 
  }
}

function Reload(){
  location.reload();
}