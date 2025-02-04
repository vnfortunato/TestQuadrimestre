"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class PersonaService {
    getPersone() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('http://localhost:5041/PersonaController/GetPersone');
                if (!response.ok) {
                    throw new Error('Errore nel recupero delle persone');
                }
                else {
                    console.log("OK");
                }
                return yield response.json();
            }
            catch (e) {
                console.log("Controller non attivo");
                return Promise.resolve(null);
            }
        });
    }
    addPersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:5041/PersonaController/AddPersona', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(persona),
            });
            if (!response.ok) {
                throw new Error('Errore nell\'aggiungere la persona');
            }
            return yield response.json();
        });
    }
    updatePersona(persona) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('http://localhost:5041/PersonaController/UpdatePersona', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(persona),
            });
            if (!response.ok) {
                throw new Error('Errore nell\'aggiornare la persona');
            }
        });
    }
    deletePersona(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`http://localhost:5041/PersonaController/DeletePersona/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Errore nell\'eliminare la persona');
            }
        });
    }
}
const prova = new PersonaService();
console.log(prova.getPersone());
