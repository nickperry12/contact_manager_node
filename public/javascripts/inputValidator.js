export class InputValidator {
  validateName(name) {
    return /^[a-zA-Z'\- ]+$/gi.test(name);
  }

  validateEmail(email) {
    return /^[a-z0-9]+(?:[.-_]?[a-z0-9]+)*@([a-z]+\.)+[a-z]+$/i.test(email);
  }

  validatePhoneNumber(number) {
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(number);
  }

  validateData(data) {
    let name = data.full_name;
    let number = data.phone_number;
    let email = data.email;

    return this.validateName(name) &&
    this.validatePhoneNumber(number) &&
    this.validateEmail(email);
  }
}