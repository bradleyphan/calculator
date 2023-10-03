let firstNumber = ''
let secondNumber = ''
let currentOperator = ''
let display = document.getElementById('display')

function updateDisplay() { //func checks if second num is blank and will display first num and the operator
    if (secondNumber === '') { 
        display.value = firstNumber + currentOperator
    } else { //if second number is displayed, it will display the numbers b4 the equals sign
        display.value = firstNumber + currentOperator + secondNumber
    }
}

function clearDisplay() { //clear function just p
    firstNumber = ''
    secondNumber = ''
    currentOperator = ''
    updateDisplay() //by calling at each end of function makes sure that display is always uptodate with latest user input
}

function getNumber(num) {
    if (currentOperator === '') { //Checks if theres no operator
        firstNumber += num //first number is assigned to first button thats clicked
    } else { //checks second
        secondNumber += num //second number is updated to second num thats clicked
    }
    updateDisplay()
}

function getOperator(operator) {//checks if there is a first number
    if (firstNumber !== '') { //if there is !== ' ' means there is a value
        currentOperator = operator //updates with the operator clicked 
        updateDisplay()
    }
}

function calculate() {
    if (firstNumber !== '' && secondNumber !== '') { //like i said b4, if there it is not blank it will run thru the loop
        let num1 = parseFloat(firstNumber) //using parseFloat for decimals for division
        let num2 = parseFloat(secondNumber) //These are new varaibles to store the first and second numbers 
        switch (currentOperator) { //could also use if/else statements here 
            case '+':
                firstNumber = (num1 + num2)
                break
            case '-':
                firstNumber = (num1 - num2)
                break
            case '*':
                firstNumber = (num1 * num2)
                break
            case '/':
                if (num2 !== 0) {
                    firstNumber = (num1 / num2)
                } else {
                    firstNumber = 'Error'
                }
                break
        }
        secondNumber = '' //reset secondnumber and current operator
        currentOperator = ''
        updateDisplay()
    }
}
