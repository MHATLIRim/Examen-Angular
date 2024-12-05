import { Component } from '@angular/core';
import { Stage } from '../stage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstage',
  templateUrl: './addstage.component.html',
  styleUrls: ['./addstage.component.css']
})
export class AddstageComponent {
  stage: Stage = new Stage(1, 'Stage Title', 'Description', 'Company' );

  constructor(private router: Router) {} // Injectez Router ici

  onSubmit() {
    console.log("Form submitted:", this.stage);
    this.router.navigate(['/consulter-stages']); // Redirection après soumission
  }
}
