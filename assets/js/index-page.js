let popup, backdrop;

document.addEventListener('DOMContentLoaded', () => {
    popup = document.querySelector('.add-news-popup')
    backdrop = document.querySelector('.add-news-popup-backdrop')

    document.querySelector('.add-news').addEventListener('click', togglePopup)

    document.querySelector('.add-news-popup-backdrop').addEventListener('click', () => {
        if (!popup.classList.contains('hidden')) togglePopup()
    })

    document.addEventListener('keydown', e => {
        if (e.key === "Escape" && !popup.classList.contains('hidden')) togglePopup()
    })
})

function togglePopup() {
    [popup, backdrop].forEach(el => {
        el.classList.toggle('hidden')
    })
}