import { Studente } from "./Studente";
import { Persona } from "./Persona";

class PersonaService {
    async getPersone(): Promise<Persona[] | null> {
        try {
            const response = await fetch('http://localhost:5041/persone');
            if (!response.ok) {
                throw new Error('Errore nel recupero delle persone');
            }
            const risposta = await response.json();
            console.log(risposta)
        } catch (e) {
            console.log("Controller non attivo")
            return Promise.resolve(null)
        }
    }

    async addPersona(persona: Persona): Promise<Persona> {
        console.log(persona)
        const response = await fetch('http://localhost:5041/persone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),
        });
        if (!response.ok) {
            throw new Error('Errore nell\'aggiungere la persona');
        }
        return await response.json();
    }

    async updatePersona(persona: Persona): Promise<void> {
        const response = await fetch('http://localhost:5041/persone', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(persona),
        });
        if (!response.ok) {
            throw new Error('Errore nell\'aggiornare la persona');
        }
    }

    async deletePersona(id: string): Promise<void> {
        const response = await fetch(`http://localhost:5041/persone`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Errore nell\'eliminare la persona');
        }
    }
}
const prova = new PersonaService()

const persona1 = new Studente("Lello", "Laforgia", new Date(2005, 10, 7))
prova.addPersona(persona1)
prova.getPersone()