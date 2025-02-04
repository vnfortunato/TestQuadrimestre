class PersonaService {
    async getPersone(): Promise<Persona[] | null> {
        try {
            const response = await fetch('http://localhost:5041/PersonaController/GetPersone');
            if (!response.ok) {
                throw new Error('Errore nel recupero delle persone');
            }
            else {
                console.log("OK")
            }
            return await response.json();
        } catch (e) {
            console.log("Controller non attivo")
            return Promise.resolve(null)
        }
    }

    async addPersona(persona: Persona): Promise<Persona> {
        const response = await fetch('http://localhost:5041/PersonaController/AddPersona', {
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
        const response = await fetch('http://localhost:5041/PersonaController/UpdatePersona', {
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
        const response = await fetch(`http://localhost:5041/PersonaController/DeletePersona/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Errore nell\'eliminare la persona');
        }
    }
}
const prova = new PersonaService()
console.log(prova.getPersone())
