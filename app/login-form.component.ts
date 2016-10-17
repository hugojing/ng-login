import { Component } from '@angular/core'
import { Login }    from './login'
@Component({
  moduleId: module.id,
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
  model = new Login('', '')
  submitted = false;
  onSubmit() { this.submitted = true }
  // Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model) }
}
