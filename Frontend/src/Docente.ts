class Docente extends Persona {
    override GetNominativo(): string {
        return `Docente: ${super.GetNominativo()}`
    }
    override get email() {
        return (this.nome).slice(0, 1).toLowerCase() + this.cognome.toLowerCase() + "@" + "Docente".toLowerCase() + ".com";
    }
}

