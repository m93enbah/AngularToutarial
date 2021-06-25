import { AbstractControl } from "@angular/forms";
export {emailDomain,matchEmails}


function emailDomain(domainName: string,domainName2: string) {
return (control: AbstractControl): { [key: string]: any } | null => {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf('@') + 1);
    if (email === '' || domain.toLowerCase() === domainName || domain.toLowerCase() === domainName2) {
      return null;
    } else {
      return { 'emailDomain': true };
    }
  }
}


function matchEmails(group: AbstractControl): { [key: string]: any } | null {
  const emailControl = group.get('email');
  const confirmEmailControl = group.get('ConfirmEmail');
  if (emailControl.value === confirmEmailControl.value || (confirmEmailControl.pristine && confirmEmailControl.value === '')) {
    return null;
  } else {
    return { 'CompareEmails': true };
  }
}