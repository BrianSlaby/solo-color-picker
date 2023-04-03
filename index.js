
function getColorScheme(hex) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${document.getElementById('color-schemes').value}&count=5`)
        .then(response => response.json())
        .then(data => {
            getColorSchemeHtml(data.colors)
        })
}

function getColorSchemeHtml(colors) {
    let colorSchemeHtml = ``
    colors.forEach(color => {
        const colorHex = color.hex.value
        colorSchemeHtml += `
            <div class="color-container">
                <div class="color-sample" style="background-color:${colorHex}">
                </div>
                <div class="color-hex">
                    <p>${colorHex}</p>
                </div>
            </div>
        `
    })
    document.getElementById("results-container").innerHTML = colorSchemeHtml
}

document.getElementById('get-color-btn').addEventListener("click", function(e) {
    e.preventDefault()
    getColorScheme(document.getElementById('color-input').value.slice(1))
})
