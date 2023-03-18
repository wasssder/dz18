const filter = document.querySelector('.filter')
const commentsdo = document.querySelector('.comments-do')
const commentsposle = document.querySelector('.comments-posle')
const URL = "http://localhost:3000/USERS"

const getData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    return data
}

filter.addEventListener('click', async () => {
    let data = await getData(URL)
    data.forEach(el => {
        commentsdo.insertAdjacentHTML(`beforeend`, `
        <div class="comment">
            <h4>${el.name}</h4>
            <p>${el.comment}</p>
        </div>`
        )
        if (el.comment.length >= 20) el.comment = el.comment.slice(0, 20) + '...'
        commentsposle.insertAdjacentHTML(`beforeend`, `
            <div class="comment">
                <h4>${el.name}</h4>
                <p>${el.comment}</p>
            </div>`
        )
    })
})
