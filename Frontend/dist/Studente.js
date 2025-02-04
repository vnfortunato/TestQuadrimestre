"use strict";
class Studente extends Persona {
    GetNominativo() {
        return `Studente: ${super.GetNominativo()}`;
    }
    get email() {
        return (this.nome).slice(0, 1).toLowerCase() + this.cognome.toLowerCase() + "@" + "Studente".toLowerCase() + ".com";
    }
}
