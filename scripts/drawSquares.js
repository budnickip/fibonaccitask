import fibonacci from './fibonacci.js'

const drawSquares = () =>{
    const btn = document.querySelector('.app__button')
    btn.addEventListener('click', (event)=>{
        let newDiv;
        let size;
        const resultDiv = document.querySelector('.fibonacci-result')
        for(let i = 1; i <= 20; i++){
            size = fibonacci(i)
            newDiv = document.createElement('div')
            newDiv.style.height = `${size}px`
            newDiv.style.width = `${size}px`
            newDiv.style.backgroundColor = '#2ecc71'
            resultDiv.appendChild(newDiv)
        }
        event.preventDefault()
    })
}

export default drawSquares