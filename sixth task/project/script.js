let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const addBtn = document.getElementById('addBtn');
const transactionList = document.getElementById('transactionList');
const totalDisplay = document.getElementById('total');

function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function renderTransactions() {
  transactionList.innerHTML = '';
  let total = 0;

  transactions.forEach((transaction, index) => {
    const li = document.createElement('li');
    li.classList.add(transaction.type);
    li.textContent = `${transaction.type === 'income' ? '+' : '-'}$${transaction.amount}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.background = 'red';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.borderRadius = '4px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.onclick = () => {
      transactions.splice(index, 1);
      saveTransactions();
      renderTransactions();
    };

    li.appendChild(deleteBtn);
    transactionList.appendChild(li);

    total += transaction.type === 'income' ? transaction.amount : -transaction.amount;
  });

  totalDisplay.textContent = total;
}

addBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const type = typeSelect.value;

  if (!isNaN(amount) && amount > 0) {
    transactions.push({ amount, type });
    saveTransactions();
    renderTransactions();
    amountInput.value = '';
  }
});

// Load saved transactions on page load
renderTransactions();
