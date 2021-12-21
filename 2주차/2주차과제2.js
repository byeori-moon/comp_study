document.querySelector("#click").addEventListener("click", () => {
    const first = document.querySelector("#first").value;
    const second = document.querySelector("#second").value;
    const operator = document.querySelector("#operator").text;
    const result = document.querySelector('#result');
    
    if(first) {
        const result =  document.querySelector("#result");
        if(second) {
            if(operator) {
                if(operator == "+") {
                    result.textContent = Number(first)+Number(second);
                }
                else if(operator == "-") {
                    result.textContent = Number(first)-Number(second);
                }
                else if(operator == "*") {
                    result.textContent = Number(first)*Number(second);
                }
                else if(operator == "/") {
                    result.textContent = Number(first)/Number(second);
                }
                else {
                    alert = "연산자를 바르게 입력하세요. +, -, *, /를 사용할 수 있습니다."
                }
            } else {
                result.textContent= "연산자를 바르게 입력하세요. +, -, *, /를 사용할 수 있습니다."
            }
        } else {
           result.textContent = "두번째 입력하세요."
        }
    }
    else {
       result.textContent = "첫번째 입력하세요."
    }
})