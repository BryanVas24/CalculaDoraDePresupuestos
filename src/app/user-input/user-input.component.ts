import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  //custom event
  //Lo puse como string porque de todos modos siempre que viene de un Input el dato es un string
  initialInvestment = signal('0');
  anualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');
  //Para "instanciar la calse"
  constructor(private investmentService: InvestmentService) {}
  handleinvestdata() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn(),
      annualInvestment: +this.anualInvestment(),
    });
    //Para reiniciar el form
    this.initialInvestment.set('0');
    this.anualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');
  }
}
