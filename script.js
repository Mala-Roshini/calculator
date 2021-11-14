// //creating class 
// class Calaculator{
//     constructor(previousOperandandTextElement, currentOperandandTextElement){
//         this.previousOperandandTextElement = previousOperandandTextElement;
//         this.currentOperandandTextElement = currentOperandandTextElement;
//         this.clear();
//     }

//     clear(){
//         this.previousTextElement ="";
//         this.currentTextElement ="";
//         this.operand = undefined;
//     }

//     delete(){

//     }

//     appendNumber(number){
//         if(number === "." && this.currentTextElement.includes(".")) return 
//         this.currentTextElement =  this.currentTextElement.toString() + number.toString();
//     }

//     chooseOperation(operation){
//         if(this.currentTextElement === "") return
//         if(this.previousTextElement !== ""){
//             this.compute();
//         }
//         this.operation = operation;
//         this.previousTextElement = this.currentTextElement;
//         this.currentTextElement = "";

//     }
   
//     compute(){
//         let computation
//     const prev = parseFloat(this.previousTextElement)
//     const current = parseFloat(this.currentTextElement)
//     if (isNaN(prev) || isNaN(current)) return
//     switch (this.operation) {
//       case '+':
//         computation = prev + current
//         break
//       case '-':
//         computation = prev - current
//         break
//       case '*':
//         computation = prev * current
//         break
//       case '÷':
//         computation = prev / current
//         break
//       default:
//         return
//     }
//     this.currentTextElement = computation
//     this.operation = undefined
//     this.currentTextElement = ''
//   }


//     updateDisplay(){
//         this.currentOperandandTextElement.innerText = this.currentTextElement;
//         this.previousOperandandTextElement.innerText = this.previousTextElement;
//         // console.log(`this is update ${this.currentTextElement}`);
//     }
// }
// //creating four div 1->main container , 2->entire output div 3,4->scetions of output div
// const main_ele = document.createElement("div");
// const output_ele = document.createElement("div");
// const prev_ele = document.createElement("div");
// const curr_ele = document.createElement("div");

// //set class name and append it to the document

// document.body.appendChild(main_ele);
// document.getElementsByTagName("div")[0].setAttribute("class", "main_div");

// main_ele.prepend(output_ele);
// document.getElementsByTagName("div")[1].setAttribute("class", "output");

// output_ele.prepend(prev_ele);
// document.getElementsByTagName("div")[2].setAttribute("class", "prev_div");
// // prev_ele.innerText = "09876";

// output_ele.appendChild(curr_ele);
// document.getElementsByTagName("div")[3].setAttribute("class", "current_div");

// //create buttons

// const clear_ele = document.createElement("button");
// main_ele.appendChild(clear_ele);
// document.getElementsByTagName("button")[0].setAttribute("class", "clearClass");
// clear_ele.innerText="ALL CLEAR";
// const del_ele = document.createElement("button");
// main_ele.appendChild(del_ele);
// document.getElementsByTagName("button")[1].setAttribute("class", "delClass");
// del_ele.innerText="DEL";
// const div_ele = document.createElement("button");
// main_ele.appendChild(div_ele);
// document.getElementsByTagName("button")[2].setAttribute("class", "operationClass");
// div_ele.innerText="÷";
// const one_ele = document.createElement("button");
// main_ele.appendChild(one_ele);
// document.getElementsByTagName("button")[3].setAttribute("class", "operandClass");
// one_ele.innerText="1";
// const two_ele = document.createElement("button");
// main_ele.appendChild(two_ele);
// document.getElementsByTagName("button")[4].setAttribute("class", "operandClass");
// two_ele.innerText="2";
// const three_ele = document.createElement("button");
// main_ele.appendChild(three_ele);
// document.getElementsByTagName("button")[5].setAttribute("class", "operandClass");
// three_ele.innerText="3";
// const mul_ele = document.createElement("button");
// main_ele.appendChild(mul_ele);
// document.getElementsByTagName("button")[6].setAttribute("class", "operationClass");
// mul_ele.innerText="*";
// const four_ele = document.createElement("button");
// main_ele.appendChild(four_ele);
// document.getElementsByTagName("button")[7].setAttribute("class", "operandClass");
// four_ele.innerText="4";
// const five_ele = document.createElement("button");
// main_ele.appendChild(five_ele);
// document.getElementsByTagName("button")[8].setAttribute("class", "operandClass");
// five_ele.innerText="5";
// const six_ele = document.createElement("button");
// main_ele.appendChild(six_ele);
// document.getElementsByTagName("button")[9].setAttribute("class", "operandClass");
// six_ele.innerText="6";
// const plus_ele = document.createElement("button");
// main_ele.appendChild(plus_ele);
// document.getElementsByTagName("button")[10].setAttribute("class", "operationClass");
// plus_ele.innerText="+";
// const seven_ele = document.createElement("button");
// main_ele.appendChild(seven_ele);
// document.getElementsByTagName("button")[11].setAttribute("class", "operandClass");
// seven_ele.innerText="7";
// const eight_ele = document.createElement("button");
// main_ele.appendChild(eight_ele);
// document.getElementsByTagName("button")[12].setAttribute("class", "operandClass");
// eight_ele.innerText="8";
// const nine_ele = document.createElement("button");
// main_ele.appendChild(nine_ele);
// document.getElementsByTagName("button")[13].setAttribute("class", "operandClass");
// nine_ele.innerText="9";
// const minus_ele = document.createElement("button");
// main_ele.appendChild(minus_ele);
// document.getElementsByTagName("button")[14].setAttribute("class", "operationClass");
// minus_ele.innerText="-";
// const dot_ele = document.createElement("button");
// main_ele.appendChild(dot_ele);
// document.getElementsByTagName("button")[15].setAttribute("class", "operandClass");
// dot_ele.innerText=".";
// const zero_ele = document.createElement("button");
// main_ele.appendChild(zero_ele);
// document.getElementsByTagName("button")[16].setAttribute("class", "operandClass");
// zero_ele.innerText="0";
// const mod_ele = document.createElement("button");
// main_ele.appendChild(mod_ele);
// document.getElementsByTagName("button")[17].setAttribute("class", "operationClass");
// mod_ele.innerText="Mod";
// const equals_ele = document.createElement("button");
// main_ele.appendChild(equals_ele);
// document.getElementsByTagName("button")[18].setAttribute("class", "equalClass");
// equals_ele.innerText="=";



// const numberButtons = document.querySelectorAll(".operandClass");
// console.log("number button")
// console.log(numberButtons);
// const operationButtons = document.querySelectorAll(".operationClass");
// const equalsButton = document.querySelector(".equalClass");
// const deleteButton = document.querySelector(".delClass");
// const allclearButton = document.querySelector(".clearClass");
// const previousOperandandTextElement = document.querySelector(".prev_div");
// const currentOperandandTextElement = document.querySelector(".current_div");



// //create class object calculator
// const calculator = new Calaculator(previousOperandandTextElement, currentOperandandTextElement);
// //set action for button using for each ->get the value and update display

// numberButtons.forEach(button => {
//     button.addEventListener('click', ()=>{
//        calculator.appendNumber(button.innerText);
//        calculator.updateDisplay()
//     })
// })

// operationButtons.forEach(button =>{
//     button.addEventListener( 'click' , () =>{
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay();
//     })
// })

// const body_element = document.getElementsByTagName("body")[0].setAttribute("id", "body_id");
// //calculator div
// const div_element = document.createElement("div");
// body_id.prepend(div_element);
// document.getElementsByTagName("div")[0].setAttribute("id" , "main_div");
// document.getElementsByTagName("div")[0].setAttribute("class" , "column");
// //creating two div 1->input 2->math operations
// const text_div = document.createElement("div");
// // const display_div = document.createElement("div"); 
// const operation_div = document.createElement("div"); 
// //append -> left -> parent element --> left --> child element name
// main_div.prepend(text_div);
// main_div.appendChild(operation_div);

// document.getElementsByTagName("div")[1].setAttribute("id", "text_id");
// document.getElementsByTagName("div")[2].setAttribute("id", "operation_id");

// document.getElementsByTagName("div")[1].setAttribute("class", "row");
// document.getElementsByTagName("div")[2].setAttribute("class", "row");


// const display_text = document.createElement("input");
// display_text.setAttribute("id", "display_text_id");
// text_id.prepend(display_text);
// const clear_element = document.createElement("button");
// clear_element.setAttribute("id", "clear_button");
// clear_element.setAttribute("class", "clear_button");
// clear_element.innerText="clear";

// display_text.after(clear_element);
// const reset = () => document.getElementById("display_text_id").value="";
// clear_element.setAttribute("onclick" ,"reset()");

// const button_element = document.createElement("button");

//     for(const i=1;i<=20;i++)
//     {
//         const button_element = document.createElement("button");
//         operation_div.appendChild(button_element)[i];
//         button_element.className = "button_class";

// }
//     //upper row - m operations
//     const button_mplus = document.getElementsByTagName("button")[1].setAttribute("id", "mplus");
//     mplus.innerText = "M+";

//     const button_mminus = document.getElementsByTagName("button")[2].setAttribute("id", "mminus");
//     mminus.innerText = "M-";

//     const button_mc = document.getElementsByTagName("button")[3].setAttribute("id", "mc");
//     mc.innerText = "MC";
 
//     //number row
//     const button_seven = document.getElementsByTagName("button")[5].setAttribute("id", "seven");
//     seven.innerText = "7";
//     const button_eight = document.getElementsByTagName("button")[6].setAttribute("id", "eight");
//     eight.innerText = "8";
//     const button_nine = document.getElementsByTagName("button")[7].setAttribute("id", "nine");
//     nine.innerText = "9";
//     const button_four = document.getElementsByTagName("button")[9].setAttribute("id", "four");
//     four.innerText = "4";
//     const button_five = document.getElementsByTagName("button")[10].setAttribute("id", "five");
//     five.innerText = "5";
//     const button_six = document.getElementsByTagName("button")[11].setAttribute("id", "six");
//     six.innerText = "6";
//     const button_one = document.getElementsByTagName("button")[13].setAttribute("id", "one");
//     one.innerText = "1";
//     const button_two = document.getElementsByTagName("button")[14].setAttribute("id", "two");
//     two.innerText = "2";
//     const button_three = document.getElementsByTagName("button")[15].setAttribute("id", "three");
//     three.innerText = "3";
//     //math - add, sub, mul, div row

//     const button_add = document.getElementsByTagName("button")[4].setAttribute("id", "add");
//     add.innerText = "+";

//     const button_sub = document.getElementsByTagName("button")[8].setAttribute("id", "sub");
//     sub.innerText = "-";

//     const button_mul = document.getElementsByTagName("button")[12].setAttribute("id", "mul");
//     mul.innerText = "X";

//     const button_div = document.getElementsByTagName("button")[16].setAttribute("id", "div");
//     div.innerText = "/";

//     //last row - clear , decimal, zero, equals
//     const button_mod = document.getElementsByTagName("button")[19].setAttribute("id", "mod");
//     mod.innerText = "Mod";

//     const button_equals = document.getElementsByTagName("button")[20].setAttribute("id", "equals");
//     equals.innerText = "=";

//     const button_decimal = document.getElementsByTagName("button")[17].setAttribute("id", "decimal");
//     decimal.innerText = ".";

//     const button_zero = document.getElementsByTagName("button")[18].setAttribute("id", "zero");
//     zero.innerText = "0";



class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  

  //creating four div 1->main container , 2->entire output div 3,4->scetions of output div
const main_ele = document.createElement("div");
const output_ele = document.createElement("div");
const prev_ele = document.createElement("div");
const curr_ele = document.createElement("div");

//set class name and append it to the document

document.body.appendChild(main_ele);
document.getElementsByTagName("div")[0].setAttribute("class", "main_div");

main_ele.prepend(output_ele);
document.getElementsByTagName("div")[1].setAttribute("class", "output");

output_ele.prepend(prev_ele);
document.getElementsByTagName("div")[2].setAttribute("class", "prev_div");
// prev_ele.innerText = "09876";

output_ele.appendChild(curr_ele);
document.getElementsByTagName("div")[3].setAttribute("class", "current_div");

//create buttons

const clear_ele = document.createElement("button");
main_ele.appendChild(clear_ele);
document.getElementsByTagName("button")[0].setAttribute("class", "clearClass");
clear_ele.innerText="ALL CLEAR";
const del_ele = document.createElement("button");
main_ele.appendChild(del_ele);
document.getElementsByTagName("button")[1].setAttribute("class", "delClass");
del_ele.innerText="DEL";
const div_ele = document.createElement("button");
main_ele.appendChild(div_ele);
document.getElementsByTagName("button")[2].setAttribute("class", "operationClass");
div_ele.innerText="÷";
const one_ele = document.createElement("button");
main_ele.appendChild(one_ele);
document.getElementsByTagName("button")[3].setAttribute("class", "operandClass");
one_ele.innerText="1";
const two_ele = document.createElement("button");
main_ele.appendChild(two_ele);
document.getElementsByTagName("button")[4].setAttribute("class", "operandClass");
two_ele.innerText="2";
const three_ele = document.createElement("button");
main_ele.appendChild(three_ele);
document.getElementsByTagName("button")[5].setAttribute("class", "operandClass");
three_ele.innerText="3";
const mul_ele = document.createElement("button");
main_ele.appendChild(mul_ele);
document.getElementsByTagName("button")[6].setAttribute("class", "operationClass");
mul_ele.innerText="*";
const four_ele = document.createElement("button");
main_ele.appendChild(four_ele);
document.getElementsByTagName("button")[7].setAttribute("class", "operandClass");
four_ele.innerText="4";
const five_ele = document.createElement("button");
main_ele.appendChild(five_ele);
document.getElementsByTagName("button")[8].setAttribute("class", "operandClass");
five_ele.innerText="5";
const six_ele = document.createElement("button");
main_ele.appendChild(six_ele);
document.getElementsByTagName("button")[9].setAttribute("class", "operandClass");
six_ele.innerText="6";
const plus_ele = document.createElement("button");
main_ele.appendChild(plus_ele);
document.getElementsByTagName("button")[10].setAttribute("class", "operationClass");
plus_ele.innerText="+";
const seven_ele = document.createElement("button");
main_ele.appendChild(seven_ele);
document.getElementsByTagName("button")[11].setAttribute("class", "operandClass");
seven_ele.innerText="7";
const eight_ele = document.createElement("button");
main_ele.appendChild(eight_ele);
document.getElementsByTagName("button")[12].setAttribute("class", "operandClass");
eight_ele.innerText="8";
const nine_ele = document.createElement("button");
main_ele.appendChild(nine_ele);
document.getElementsByTagName("button")[13].setAttribute("class", "operandClass");
nine_ele.innerText="9";
const minus_ele = document.createElement("button");
main_ele.appendChild(minus_ele);
document.getElementsByTagName("button")[14].setAttribute("class", "operationClass");
minus_ele.innerText="-";
const dot_ele = document.createElement("button");
main_ele.appendChild(dot_ele);
document.getElementsByTagName("button")[15].setAttribute("class", "operandClass");
dot_ele.innerText=".";
const zero_ele = document.createElement("button");
main_ele.appendChild(zero_ele);
document.getElementsByTagName("button")[16].setAttribute("class", "operandClass");
zero_ele.innerText="0";
const mod_ele = document.createElement("button");
main_ele.appendChild(mod_ele);
document.getElementsByTagName("button")[17].setAttribute("class", "operationClass");
mod_ele.innerText="Mod";
const equals_ele = document.createElement("button");
main_ele.appendChild(equals_ele);
document.getElementsByTagName("button")[18].setAttribute("class", "equalClass");
equals_ele.innerText="=";



const numberButtons = document.querySelectorAll(".operandClass");
const operationButtons = document.querySelectorAll(".operationClass");
const equalsButton = document.querySelector(".equalClass");
const deleteButton = document.querySelector(".delClass");
const allClearButton = document.querySelector(".clearClass");
const previousOperandTextElement = document.querySelector(".prev_div");
const currentOperandTextElement = document.querySelector(".current_div");

// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})