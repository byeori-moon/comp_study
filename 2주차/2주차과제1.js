const result = document.querySelector("#result");
document.querySelector("#plus").addEventListener("click", () => {
        const plusresult = Number(result.textContent) + 1;
        result.textContent = plusresult;
    }
)
document.querySelector("#minus").addEventListener("click", () => {
        const minusresult = Number(result.textContent) - 1;
        result.textContent = minusresult;
    }
)