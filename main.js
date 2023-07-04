const [paste, convert, go] = document.querySelectorAll('button')
const [originalURL, newURL] = document.querySelectorAll('input')

convert.addEventListener('click', e => {
    const str = originalURL.value
    const vjk = str.lastIndexOf('jk=')
    const advn = str.lastIndexOf('&advn=')

    newURL.value = "https://www.indeed.com/viewjob?" + str.slice(vjk, advn)
    go.parentElement.href = newURL.value
})

