let row = 10;
let coloum = 10;
for (let i = 1; i <= coloum; i++) {
  let star = "";
  
  if (i == 1 || i== coloum) {
  for (let j = 1; j <= row; j++) {
     star = star + "*";
    }
  }
  else if(i>1 ||i<coloum){
    for(let j=1; j<= row; j++){
      if(j==1 || j==coloum){
        star=star+"*";
      }
      else{
        star=star+" ";
      }
    }
  }
  console.log(star);
}