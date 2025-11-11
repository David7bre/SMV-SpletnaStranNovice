document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.add-news').addEventListener('click', () => {
        console.log('test')
        document.querySelector('.add-news-popup').classList.toggle('hidden')
    })
})