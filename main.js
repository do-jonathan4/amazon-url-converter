const [paste, convert, go] = document.querySelectorAll('button')
const [originalURL, newURL] = document.querySelectorAll('input')

convert.addEventListener('click', e => {
    const str = originalURL.value
    if (str === '') return

    const vjk = str.lastIndexOf('jk=')
    const advn = () => {
        if (str.lastIndexOf('&advn=') !== -1) {
            return str.lastIndexOf('&advn=')
        } else if (str.lastIndexOf('&q=') !== -1) {
            return str.lastIndexOf('&q=')
        } else if (str.lastIndexOf('&start') !== -1) {
            return str.lastIndexOf('&start')
        } else {
            return originalURL.value.length
        }
    }
    newURL.value = "https://www.indeed.com/viewjob?" + str.slice(vjk, advn())
    go.parentElement.href = newURL.value
    go.parentElement.target = "_blank"
})

paste.addEventListener('click', e => {
    navigator.clipboard.readText()
        .then(x => originalURL.value = x)
})