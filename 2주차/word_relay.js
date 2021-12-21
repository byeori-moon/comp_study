document.querySelector("#button").addEventListener("click", () =>{
    const word = document.querySelector("#word").textContent
    const input = document.querySelector("#input").value

    const last = word[word.length - 1]
    const first = input[0]
    
    if(first === last) {
        document.querySelector("#word").textContent = input
        document.querySelector("#input").value = ''
        document.querySelector("input").focus()
        errorTag.textContent = ''

    } else {
        document.querySelector("#error").textContent = "땡!!"
        document.querySelector("#input").value = ''
        document.querySelector("input").focus()
        

    }
})