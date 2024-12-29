import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  //Lo puse como string porque de todos modos siempre que viene de un Input el dato es un string
  initialInvestment = '0';
  anualInvestment = '0';
  expectedReturn = '5';
  duration = '10';

  handleinvestdata() {
    console.log('Investment data submitted');
    console.log(
      this.initialInvestment,
      this.anualInvestment,
      this.expectedReturn,
      this.duration
    );
  }
}
