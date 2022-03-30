document.addEventListener("mousemove", parallax)

function parallax(e) {
    this.querySelectorAll('.layer').forEach( layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

let a = 8
let b = ''
for(let i=0;i<a;i++) {
    for(let j=0;j<a;j++) {
        b += '#'
    }
    b += '\n'
}
console.log(b)


const url ='http://api.weatherstack.com/current'
fetch(url)
.then(res => res.json())
.then(data => console.log(data))


