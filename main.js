//HW 6.1
const card = document.querySelector('.card')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')
let count = localStorage.getItem('count') || 1

fetchData(count)

btnNext.onclick = () => {
    count++;
    if (count > 200) {
        count = 1
    }
    fetchData(count)
}

btnPrev.onclick = () => {
    count--;
    if (count < 1) {
        count = 200
    }
    fetchData(count)
}

function fetchData(count) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
        card.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <br>
            <span>${data.completed}</span>
        `
        localStorage.setItem('count', count)
        })
}

//HW 6.2
const postData = fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json(), () => {alert('reject')})
    .then(data => console.log(data))