import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() calculate = new EventEmitter<InvestDataInterface>();
  //Lo puse como string porque de todos modos siempre que viene de un Input el dato es un string
  initialInvestment = '0';
  anualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  handleinvestdata() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn,
      annualInvestment: +this.anualInvestment,
    });
  }
}
