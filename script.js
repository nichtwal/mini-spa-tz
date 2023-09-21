// Timer counter
const targetDate = new Date('2023-09-21 23:59:59').getTime()

function updateTimer() {
    const currentDate = new Date().getTime(),
        timeLeft = targetDate - currentDate;

    if (timeLeft < 0) {
        clearInterval(timeInterval)
        document.querySelector('#timer').innerHTML = 'конец!'
    } else {
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((timeLeft % (1000 * 60) / 1000));
            let hor = hours < 10 ? `0${hours}` : hours
            let min = minutes < 10 ? `0${minutes}` : minutes
            let sec = seconds < 10 ? `0${seconds}` : seconds
        document.querySelector('#timer').innerHTML = `${hor}:${min}:${sec}`
    }
}

const timeInterval = setInterval(updateTimer, 1000);

updateTimer()

// album photos

const albumphotos = document.querySelector('.slider-gallery')
const photos = albumphotos.querySelectorAll('img')
const updatePhoto = (event) => {
    const clickedPhoto = event.target;
    const mainPhoto = document.querySelector('.slider-item img');
    const newSrc = clickedPhoto.src
    mainPhoto.src = newSrc
    photos.forEach(el => {
        if (el.classList.contains('selected')) {
            el.classList.remove('selected')
        }
    })
    clickedPhoto.classList.add('selected')
}
photos.forEach(photo => {
    photo.addEventListener('click', updatePhoto);
})

// color list

const selectedColor = document.querySelector('.selected-color')

selectedColor.addEventListener('click', () => {
   const list =  document.querySelector('.color-list')
   list.classList.add('open');
   const listValues = list.querySelectorAll('p')
   listValues.forEach(el => {
    el.addEventListener('click', () => {
        selectedColor.querySelector('p').innerHTML = el.textContent
        list.classList.remove('open')
    })
   }) 
})

// size list 
const selectedSize = document.querySelector('.selected-size')

selectedSize.addEventListener('click', () => {
   const list =  document.querySelector('.size-list')
   list.classList.add('open');
   const listValues = list.querySelectorAll('p')
   listValues.forEach(el => {
    el.addEventListener('click', () => {
         selectedSize.querySelector('p').innerHTML = el.textContent
        list.classList.remove('open')
    })
   }) 
})
