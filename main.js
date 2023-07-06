const [paste, convert, go] = document.querySelectorAll('button')
const [originalURL, newURL] = document.querySelectorAll('input')

window.onload = () => originalURL.focus()

convert.addEventListener('click', e => {
    const str = originalURL.value
    if (str === '' || !str.includes('indeed')) return

    const vjk = str.lastIndexOf('jk=')
    newURL.value = "https://www.indeed.com/viewjob?" + str.slice(vjk, vjk+19)

    go.parentElement.href = newURL.value
    go.parentElement.target = "_blank"
})

paste.addEventListener('click', e => {
    navigator.clipboard.readText()
        .then(x => originalURL.value = x)
})