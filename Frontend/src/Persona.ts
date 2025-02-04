// Classe astratta che rappresenta un blueprint di una Persona
abstract class Persona {
    constructor(private id: number, protected nome: string, protected cognome: string, private DataDiNascita: Date) { }

    // Metodo che restituisce l'email dell'istanza corrente
    get email() {
        return (this.nome).slice(0, 1).toLowerCase() + this.cognome.toLowerCase() + "@" + "Dominio".toLowerCase() + ".com";
    }

    // Metodo che restituisce l'id univoco dell'istanza corrente
    GetID() {
        return this.id;
    }

    // Metodo che restituisce il nome ed il cognome dell'istanza corrente
    GetNominativo() {
        return `${this.nome} ${this.cognome}`;
    }

    // Metodo che restituisce l'età dell'istanza corrente calcolandola in base all'anno corrente
    GetEta() {
        var dataOggi = new Date();
        var eta = dataOggi.getFullYear() - this.DataDiNascita.getFullYear();
        var mese = dataOggi.getMonth() - this.DataDiNascita.getMonth();
        if (mese < 0 || (mese === 0 && dataOggi.getDate() < this.DataDiNascita.getDate())) {
            eta--;
        }
        return eta;
    }
}
