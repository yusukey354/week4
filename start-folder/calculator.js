
    const value1Input = document.getElementById('value1');
    const value2Input = document.getElementById('value2');
    const operatorSelect = document.getElementById('choice');
    const formula = document.getElementById('formula');
    const resultDiv = document.getElementById('result');

    document.getElementById('calcform').addEventListener('input', calculate);

    function calculate() {
        const num1 = parseFloat(value1.value);
        const num2 = parseFloat(value2.value);
        const operator = choice.value;
    
        if (isNaN(num1) || isNaN(num2)) {
            formula.textContent = '正しい数値を入力してください';
            result.textContent = '';
            return;
        }
    
        let calcFormula = '';
        let calcResult = 0;
    
        switch (operator) {
            case 'addition':
                calcFormula = `${num1} + ${num2}`;
                calcResult = num1 + num2;
                break;
            case 'subtraction':
                calcFormula = `${num1} - ${num2}`;
                calcResult = num1 - num2;
                break;
            case 'multiplication':
                calcFormula = `${num1} × ${num2}`;
                calcResult = num1 * num2;
                break;
            case 'division':
                if (num2 === 0) {
                    formula.textContent = '0で割ることはできません';
                    result.textContent = '';
                    return;
                }
                calcFormula = `${num1} ÷ ${num2}`;
                calcResult = num1 / num2;
                break;
        }
    
        formula.textContent = calcFormula;
        result.textContent = `${calcResult}`;
    }