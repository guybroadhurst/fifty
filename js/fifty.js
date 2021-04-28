// add repeated text to the marquee at the top of the page
function makeMarquee() {
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'
  // fill new array with our title text 50 times
  const marqueeText = new Array(50).fill(title).join(' — ')
  // select the marquee span
  const marqueeTag = document.querySelector('.marquee span')
  // set the text for the marquee span to the new array
  marqueeTag.innerHTML = marqueeText
}

makeMarquee()

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}





// pulsate the circles on the day 1 section
// select all the circle spans on the page
const circles = document.querySelectorAll('.circle')

// loop through and animate each
circles.forEach((circle, index) => {
  circle.animate(
    // apply scale transform * 1.2 at 50% mark
    [{ transform: 'scale(1)' }, { transform: 'scale(1.2)' }, { transform: 'scale(1)' }],
    {
      // delay each circle 362ms * their index in our array
      delay: 362 * index,
      duration: 3000,
      iterations: Infinity,
    }
  )
})



// rotate the squiggles on the day 2 section
const squiggles = document.querySelectorAll('.squiggle')

squiggles.forEach((squiggle, index) => {
  // gets a random whole number between -45 & 45
  let angle = random(-25, 25)
  console.log(angle)

  squiggle.animate(
    [
      { transform: `rotate(0deg)` },
      // rotates the squiggle shape, using the randomly generated angle
      { transform: `rotate(${angle}deg)` },
      { transform: `rotate(0deg)` },
    ],
    {
      delay: 362 * index,
      duration: 3000,
      iterations: Infinity,
    }
  )
})





// using the inView repo, decect when any of our sections enters or exits
// the viewport, add a class or remove it respectively
inView('.section')
  .on('enter', (section) => {
    section.classList.add('in-viewport')
  })
  .on('exit', (section) => {
    section.classList.remove('in-viewport')
  })

// adds a threshold of 50% of the section height to trigger the above
inView.threshold(0.5)





// Select all of the sections and loop through them
// Within the sections select all the artists and shapes
// for both of these add transition-delay effect
// make sure that the shapes fade in after the artists

const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
  const artists = section.querySelectorAll('.lineup li')
  const shapes = section.querySelectorAll('.shape')

  artists.forEach((artist, index) => {
    const delay = index * 100
    artist.style.transitionDelay = delay + 'ms'
  })

  shapes.forEach((shape, index) => {
    const delay = (artists.length + index) * 100
    shape.style.transitionDelay = delay + 'ms'
  })
})




// when we click a js-scroll link, run a function
// stop the link from default jumping to the section
// find the linked element, then smooth scrollIntoView

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()

    const href = link.getAttribute('href')

    document.querySelector(href).scrollIntoView({ 
      behavior: 'smooth' 
      })
  })
})



