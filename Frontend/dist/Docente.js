"use strict";
class Docente extends Persona {
    GetNominativo() {
        return `Docente: ${super.GetNominativo()}`;
    }
    get email() {
        return (this.nome).slice(0, 1).toLowerCase() + this.cognome.toLowerCase() + "@" + "Docente".toLowerCase() + ".com";
    }
}
