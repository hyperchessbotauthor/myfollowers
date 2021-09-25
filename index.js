let submitUsernameElement = document.getElementById("submitusername")
let inputUsernameElement = document.getElementById("username")
let blobDivElement = document.getElementById("blobdiv")

submitUsernameElement.addEventListener("click", submitUsername)

function submitUsername() {
    username = inputUsernameElement.value

    if(!username) {
        alert("no username to fetch.")

        return
    }

    console.log(`getting ${username}`)

    fetch(`https://lichess.org/api/user/${username}`).then(
        response => {            
            response.json().then(
                blob => {
                    console.log("user received ok", blob)
                    blobDivElement.innerHTML = "<pre>" + JSON.stringify(blob, null, 2) + "</pre>"
                },
                err => {
                    console.error("problem with username api content", err)
                    alert("No such user.")
                }
            )            
        },
        err => {
            console.error("problem with username api request", err)
            alert("Request failed.")
        }
    )
}