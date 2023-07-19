const [paste, convert, go] = document.querySelectorAll('button')
const [originalURL, newURL] = document.querySelectorAll('input')

window.onload = () => originalURL.focus()

convert.addEventListener('click', e => {
    const str = originalURL.value
    if (str === '' || !str.includes('amazon')) return

    const dp = str.lastIndexOf('dp/')
    newURL.value = "https://www.amazon.com/" + str.slice(dp, dp+13)

    go.parentElement.href = newURL.value
    go.parentElement.target = "_blank"
})

paste.addEventListener('click', e => {
    navigator.clipboard.readText()
        .then(x => originalURL.value = x)
})