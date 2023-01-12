import '../css/component.css'

function RandomImageGeneratorEngine (min, max) {
    let step1  = max - min + 1
    let step2 = Math.random() * step1
    let result = Math.floor(step2) + min

    return result
}

function RandomImageGenerator () {
    let index = RandomImageGeneratorEngine(0, 78)
    // let index = RandomImageGeneratorEngine(0, months.length-1)
    console.log("This is the random number: " + index)
    // console.log(months[index])

    localStorage.setItem('value1', `${index}`)
    // localStorage.setItem('value1', `${months[index]}`)
    window.location.reload()
}

let storedimage = localStorage.getItem('value1')
console.log("From localstorage: " + storedimage)

const Button = (props) => {
    return(
        <button onClick={RandomImageGenerator}>
            {props.children}
        </button>
    )
}

export default Button