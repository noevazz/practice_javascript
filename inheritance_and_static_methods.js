class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._name = name;
    this._certifications = certifications;
    this._remainingVacationDays = 20;
  }
  addCertification(certification) {
    this._certifications.push(certification);
  }
  getCertifications () {
    return this._certifications;
  }
  static greeting () { // static method can NOT be access from instances
    return 'Hello, how can I help you?';
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
nurseOlynyk.addCertification('x-rays');
console.log(nurseOlynyk.remainingVacationDays);
console.log(nurseOlynyk.getCertifications());

console.log(Nurse.greeting());
