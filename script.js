const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

// const updateDebounceText = debounce(() => {
//   incrementCount(debounceText)
// })

// const updateThrottleText = throttle(() => {
//   incrementCount(throttleText)
// }, 100)

// function debounce(cb, delay = 1000) {
//   let timeout

//   return (...args) => {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => {
//       cb(...args)
//     }, delay)
//   }
// }

// function throttle(cb, delay = 1000) {
//   let shouldWait = false
//   let waitingArgs
//   const timeoutFunc = () => {
//     if (waitingArgs == null) {
//       shouldWait = false
//     } else {
//       cb(...waitingArgs)
//       waitingArgs = null
//       setTimeout(timeoutFunc, delay)
//     }
//   }

//   return (...args) => {
//     if (shouldWait) {
//       waitingArgs = args
//       return
//     }

//     cb(...args)
//     shouldWait = true

//     setTimeout(timeoutFunc, delay)
//   }
// }

// document.addEventListener("mousemove", e => {
//   incrementCount(defaultText)
//   updateDebounceText()
//   updateThrottleText()
// })

// function incrementCount(element) {
//   element.textContent = (parseInt(element.innerText) || 0) + 1
// }


//updateDebounceText is a function that return a function that takes a text as an argument and set the text to debounceText element 
const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
  // console.log("Searching with Debounce:" + text);
})


const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
})

// ----------------------------------

//Defualt Text
input.addEventListener("input",e => {
  //Get's the value of input and set it to defaultText
  defaultText.textContent =e.target.value;
  // console.log("Searching without Debounce: " + e.target.value);

  //Set the value of input to debounceText
  updateDebounceText(e.target.value)

  //Set the value of input to throttleText
  updateThrottleText(e.target.value)
})

// ----------------------------------


function debounce(cb,delay=500){
  let timeout;
  //..args means it can take any number of arguments
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

// ----------------------------------


function throttle(cb, delay = 900) {

  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if(waitingArgs == null) {
      shouldWait = false
    }else{
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    }
  }
  
  return function(...args){
    if(shouldWait) {
      waitingArgs = args
      return
    };
    
    cb(...args)
    shouldWait = true

  setTimeout(timeoutFunc, delay)
  }

}