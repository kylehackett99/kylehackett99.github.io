class Calculator {
    numbers;
    operators;
    
    constructor(){
        const input = document.getElementById("calculator").value.trim().split(" ");
        const nums1 = [];
        const ops = [];
        for(let i = 0; i < input.length; i++){
            if(i % 2 == 0) nums1.push(input[i]);
            else ops.push(input[i]);
        }
        const temp = nums1;
        const nums = temp.map(Number);
        console.log(nums);
        console.log(ops);
        this.numbers = nums;
        this.operators = ops;
        this.doMath();
    }

    doMath(){
        var result = this.numbers.shift();
        console.log(result);
        // For each operator
        this.operators.forEach(element => {
            console.log(element);
            var x = this.numbers.shift();

            // give result and x to each method
            result = this.parseOps(element, result, x);
            console.log(result);

            document.getElementById("resultant").innerHTML = result;
        });
    }
    
    parseOps(element, num1, num2){
        switch(element){
            case '+':
                return add(num1, num2);    
            case '-':
                return sub(num1, num2);
            case '*':
                return multiply(num1, num2);
            case '/':
                return divide(num1, num2);
            case '^':
                return pow(num1, num2);
            default:
        }
    }

}