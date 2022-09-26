
const btSubmit = document.querySelector("#bt-submit")
const btCopy = document.querySelector("#bt-copy")
const input = document.querySelector("input")
const showCopied = document.querySelector("#show-copied")

btSubmit.onclick = () => {
    getShort(input.value)
}

btCopy.onclick = () => {
    if (input.value != '') {
        input.select();
        input.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(input.value);
        showCopied.innerHTML = "(" + input.value + ") Copied!"
    }
    input.value = ''
}

function getShort(originalUrl) {
    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apiKey": "647d6dda85f9460c840da86b3b125cc1"
        },
        body: JSON.stringify({ destination: originalUrl, domain: { fullName: "rebrand.ly" } })
    })
        .then(response => response.json())
        .then(json => {
            if (!json.message) {
                showCopied.innerHTML = ''
                input.value = json.shortUrl;
            } else {
                showCopied.innerHTML = "(" + json.message + ")"
            }
        });
}
