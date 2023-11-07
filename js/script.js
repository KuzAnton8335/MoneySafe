'use strict';
import { convertStingNumber } from './convertStingNumber.js';

const financeForm = document.querySelector('.finance__form');
const financeAmount = document.querySelector('.finance__amount');
let amount = 0;
financeAmount.textContent = amount;
const financeReport = document.querySelector('.finance__report');
const report = document.querySelector('.report');
const reportClose = document.querySelector('.report__close');

financeForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const typeOperation = e.submitter.dataset.typeOperation;
	console.log(typeOperation);
	const changeAmount = Math.abs(convertStingNumber(financeForm.amount.value));

	if (typeOperation === 'income') {
		amount += changeAmount;
	}
	if (typeOperation === 'expenses') {
		amount -= changeAmount;
	}
	financeAmount.textContent = `${amount.toLocaleString()}₽`;
})

financeReport.addEventListener('click', () => {
	report.classList.add('report__open');
})

reportClose.addEventListener('click', () => {
	report.classList.remove('report__open');
})

