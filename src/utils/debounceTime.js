export const debounceTime = (milliseconds, fn) => {
  let timer = 0
  return () => {
    clearTimeout(timer)
    timer = setTimeout(fn, milliseconds)
  }
}

const showMessage = () => console.log('Opa!') 
const operation2 = debounceTime(500, showMessage)

operation2()
operation2()
operation2()

/* com essa função debounceTime a função operation2 vai executar apenas uma única vez */

