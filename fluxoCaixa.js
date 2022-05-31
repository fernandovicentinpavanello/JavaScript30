/*
    ### Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    → Crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
    
*/

let family = {
    incomes: [2500.00, 1200.50, 250.99, 360.45],
    expenses: [320.45, 128.45, 119.99, 1500.00]
};

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    let message = "Seu saldo é de"

    if (total >= 0) {
        console.log(`${message} R$${total.toFixed(2)}`)
    } else {
        console.log(`${message} R$${total.toFixed(2)}`)
    }
}

calculateBalance()
