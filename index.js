let APIcall = (q) => {
    const res = ['apple', 'banana', 'apricot', 'avocado', 'blueberry']


return new Promise((resolve, reject) => {
    setTimeout(() => {
         
        const ans = res.filter(el => el.includes(q))
        resolve(ans)
    }, 1000)
})

}

const debounce = (func, delay) => {
    let timer;
    return(...args)=>{
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), delay)
    }
}

const handleSearch = async (e) => {
    let q = e.target.value
    if(q.trim == "") {
        updateResult([])
        return
    }

    const result = await APIcall(q)
    updateResult(result)
}

const updateResult = (result) => {
    const resultList = document.getElementById('List')
    resultList.innerHTML = result.map(el => `<li>${el}</li>`).join('')
}

const search = document.getElementById('search')
const Debounce = debounce(handleSearch, 500)
search.addEventListener('input', Debounce)


