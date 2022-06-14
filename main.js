const addBtn = document.querySelector('.add');
const showAdvice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions');
const clean = document.querySelector('.clean');
let advices = [];

const addAdvices = (e) =>{
    e.preventDefault();
    const input = document.querySelector('input');
    let newAdvice = input.value;
    if(input.value.length){
        for( advice of advices){
            if(advice === newAdvice){
                alert('To juz jest!');
                return
            }
        }
        advices.push(newAdvice);
        alert(`dodales ${newAdvice}`);
        input.value='';
    }
}

const showMeAdvice = () => {
    const h1 = document.querySelector('h1');
    h1.textContent = `Moja rada dla Ciebie to: ${advices[Math.floor(Math.random() * advices.length)]}`;
}

const showMeOptions = () => {
    alert(`Twoje opcje to: ${advices.join(' ')}`);
}

const clearOptions = () => {
    advices.splice(0, advices.length);
}

clean.addEventListener('click', clearOptions);
showOptions.addEventListener('click', showMeOptions);
showAdvice.addEventListener('click', showMeAdvice);
addBtn.addEventListener('click', addAdvices);