import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayValue: string = '';
  operand1: number = 0;
  operator: string = '';
  operand2: number = 0;

  appendNumber(number: number) {
    if (this.displayValue === '0') {
      this.displayValue = number.toString();
    } else {
      this.displayValue += number.toString();
    }
  }
  
  add() {
    this.operator = '+';
    this.operand1 = parseFloat(this.displayValue);
    this.displayValue = '0';
  }

  subtract() {
    this.operator = '-';
    this.operand1 = parseFloat(this.displayValue);
    this.displayValue = '0';
  }

  multiply() {
    this.operator = '*';
    this.operand1 = parseFloat(this.displayValue);
    this.displayValue = '0';
  }

  divide() {
    this.operator = '/';
    this.operand1 = parseFloat(this.displayValue);
    this.displayValue = '0';
  }

  calculate() {
    this.operand2 = parseFloat(this.displayValue);
    switch (this.operator) {
      case '+':
        this.displayValue = (this.operand1 + this.operand2 ).toString();
        break;
      case '-':
        this.displayValue = (this.operand1 - this.operand2).toString();
        break;
      case '*':
        this.displayValue = (this.operand1 * this.operand2).toString();
        break;
      case '/':
        this.displayValue = (this.operand1 / this.operand2).toString();
        break;
  
    }
    
  }

  clear() {
    this.displayValue = '0';
    this.operand1 = 0;
    this.operator = '';
    this.operand2 = 0;
  }
}
