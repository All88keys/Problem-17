
var num = 25;

//function findwords(){
  var str = num.toString();
  var array = str.split("");
  console.log(array);
  var english = [];
  for(var i = 0; i<array.length; i++){
    switch(array[i]){
      case 1:
        english[i] = "one";
        break;
      case 2:
        english[i] = "two";
        break;
      case 3:
        english[i] = "three";
        break;
       case 4:
        english[i] = "four";
        break;
       case 5:
        english[i] = "five";
        break;
        case 6:
        english[i] = "six";
        break;
       case 7:
        english[i] = "seven";
        break;
       case 8:
        english[i] = "eight";
        break;
       case 9:
        english[i] = "nine";
        break;
    defualt:
        break;
  }
    console.log(english)
  }
  
//}
