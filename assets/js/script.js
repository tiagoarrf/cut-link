
var form = document.querySelector("form")
var btCopy = document.querySelector("#bt-copy")
var showCopied = document.querySelector("#linkCuted")


form.onsubmit = () => {
    alert("okok")
    alert(form.elements.item(0).value)
    form.elements.item(0).value = "note"
}

btCopy.onclick = () => {
    form.elements.item(0).select();
    form.elements.item(0).setSelectionRange(0, 99999);
    navigator.clipboard.writeText(form.elements.item(0).value);
    alert("Copied the text: " + form.elements.item(0).value);
    showCopied.innerHTML = form.elements.item(0).value + " as ben Copied!"
    getShort()
}


function getShort() {
    fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer {7b0c2aef0f81f5001ac15d47b4ccc38232f9a904}',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
    });
}