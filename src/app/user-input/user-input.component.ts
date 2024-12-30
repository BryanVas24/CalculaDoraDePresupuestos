import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestDataInterface } from '../../types';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  //custom event
  calculate = output<InvestDataInterface>();
  //Lo puse como string porque de todos modos siempre que viene de un Input el dato es un string
  initialInvestment = signal('0');
  anualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  handleinvestdata() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.anualInvestment(),
    });
    this.initialInvestment.set('0');
    this.anualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
