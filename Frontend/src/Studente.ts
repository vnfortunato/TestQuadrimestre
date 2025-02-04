import { Persona } from "./Persona";

export class Studente extends Persona {
    override GetNominativo(): string {
        return `Studente: ${super.GetNominativo()}`
    }
    override get email() {
        return (this.nome).slice(0, 1).toLowerCase() + this.cognome.toLowerCase() + "@" + "Studente".toLowerCase() + ".com";
    }
}

