let display = document.querySelector(".display");
let container = document.querySelectorAll(".Box");
let img = document.querySelector('img')
let ul = document.querySelector('#details ul')

let operant1 = "";
let operant2 = "";
let j = 0; //for logic
let operator = "";
let result;



for (let i = 0; i < container.length; i++) {
  container[i].addEventListener("click", (e) => {

    if (e.target.className === "Box oper_Box") {
        
        j++;
        if (j==1){
            operator = e.target.innerText;
        }

      
    }

    if (j == 0) {
      if (e.target.className === "Box") {
        
        let input = e.target.innerText;
        if (operant1.length <= 10) {
          operant1 = `${operant1}${input}`;
          
        } else {
          alert("limit exceded!");
        }
      }
    } else if (j == 1) {
      if (e.target.className === "Box") {
        let input = e.target.innerText;
        if (operant2.length <= 10) {
          operant2 = `${operant2}${input}`;
   
        } else {
          alert("limit exceded!");
        }
      }
    }
  
    if (j == 2 ) {
      
      operant1 = Number(operant1);
      operant2 = Number(operant2);
      switch (operator) {
        case "+":
          result = operant1 + operant2;
          break;
        case "-":
          result = operant1 - operant2;
          break;
        case "*":
          result = operant1 * operant2;
          if(operant2.length===0){
            operant2=1
        }
          break;
        case "/":
            
          result = operant1 / operant2;
          break;

        default:
          break;
      }
      operator=e.target.innerText
      display.innerText = result + operator;
      console.log(result);
      j = 1;
   
      operant1=result.toString();
      operant2 ='';
    } else if (e.target.innerText==='=') {
      
        operant1 = Number(operant1);
        operant2 = Number(operant2);
        switch (operator) {
          case "+":
            result = operant1 + operant2;
            break;
          case "-":
            result = operant1 - operant2;
            break;
          case "*":
            result = operant1 * operant2;
            if(operant2.length===0){
              operant2=1
          }
            break;
          case "/":
              
            result = operant1 / operant2;
            break;
  
          default:
            break;
        }
        operator=e.target.innerText
        display.innerText = result;
        console.log(result);
        j = 1;
     

        operant2 ='';
      }else {
      display.innerText = `${operant1}${operator}${operant2}`;
    }
   

    if(e.target.innerText==='C'){
        operant1=''
        operant2=''
        operator=''
        j=0;
        display.innerText='0'
    }
  });
}

let k = 0;

img.addEventListener('click', (e) => {
  toggleVisibility();
});

function toggleVisibility() {
  if (k % 2 === 0) {
    ul.style.visibility = 'hidden';
  } else {
    ul.style.visibility = 'visible';
  }
  k++;
}

