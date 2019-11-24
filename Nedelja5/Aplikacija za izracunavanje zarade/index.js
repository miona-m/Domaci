

//Nisam znala da uradim zadatak sa prikazom procenata i da se "delete" dugme pojavi na hover. 
//Ne znam zasto mi se na dodavanje prihoda value dodaje kao string, a rashode normalno racuna kako treba.


const submitBtn=document.querySelector('#submit-btn');
const incExpSelector=document.querySelector('#select-source');
const addDescription=document.querySelector('#descript');
const addAmount=document.querySelector('#amount');
const incomeList=document.querySelector('#income-list');
const expenceList=document.querySelector('#expence-list');
const addBudgetTop=document.querySelector('#budget-value');
const addIncomeTop=document.querySelector('#income-value');
const addExpenceTop=document.querySelector('#expence-value');


let totalBudget=0;
let topIncome=0;
let topExpence=0;



submitBtn.addEventListener('click', submitBudget)
function submitBudget(){
    let select = incExpSelector.value;
    let addDescript = addDescription.value; 
    let addValue = addAmount.value; 
   
if (addDescript === ''){
    alert('Polje za opis transakcije ne sme biti prazno!');
    return;
}
if (addAmount.value === ''){
    alert('Polje za iznos ne sme biti prazno!');
    return;
}

 if (incExpSelector.value==='+'){
    
    let incomeInfo = document.createElement('p');
    incomeInfo.innerHTML = addDescript + ' ' + select + addValue + 'rsd';
    let removeBtn = document.createElement('div');
    removeBtn.className = 'task-remove-btn';
    removeBtn.addEventListener('click', removeTask);
    removeBtn.innerHTML = 'delete';


    totalBudget+=addValue;
    addBudgetTop.innerHTML=totalBudget;


    topIncome+=addValue;
    addIncomeTop.innerHTML=topIncome;

    incomeInfo.appendChild(removeBtn);
    incomeList.appendChild(incomeInfo);
 }

 if (incExpSelector.value==='-'){
   
    let expenceInfo = document.createElement('p');
    expenceInfo.innerHTML = addDescript + ' ' + select + addValue + 'rsd';
    let removeBtn = document.createElement('div');
    removeBtn.className = 'task-remove-btn';
    removeBtn.addEventListener('click', removeTask);
    removeBtn.innerHTML = 'delete';

    totalBudget-=addValue;
    addBudgetTop.innerHTML=totalBudget;

    topExpence-=addValue;
    addExpenceTop.innerHTML=topExpence;

    expenceInfo.appendChild(removeBtn);
    expenceList.appendChild(expenceInfo);
    
 }

}
function removeTask(e) {
    if (!confirm('Da li sigurno zelite ukloniti unete podatke?')) {
        return;
    }
    let btnToRemove = e.target;
    let divToRemove = btnToRemove.parentElement;
    divToRemove.remove();
}



