import {AbstractControl, FormControl} from "@angular/forms";
import {Observable} from "rxjs";

interface restrictedEmails {
  [key: string]: boolean;
}

export class MyValidators {
  static restrictedEmails(control:FormControl): restrictedEmails | null{
    if(["v@mail.ru", 'test@mail.ru'].includes(control.value)) {
      return {restrictedEmail: true}
      }
    return null
  }
  static uniqEmail(controls: AbstractControl): Promise<restrictedEmails | null> | Observable<restrictedEmails> {
    return new Promise(resolve => {
      setTimeout(() => {
        if(controls.value === "async@mail.ru") {
          resolve({
            uniqError: true
          })
        } else {
          resolve(null)
        }
      }, 5000)
    })
  }
}
