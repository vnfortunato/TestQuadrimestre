using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;
using System.Text.Json;
using Test_quadrimestre.Dto;

public class PersonaController : ControllerBase
{
    public static List<Persona> listaPersone = new List<Persona>();

    // Carica le persone solo una volta all'inizio
    public PersonaController()
    {
        CaricaPersone();
    }

    public static void SalvaPersone()
    {
        JsonSerializerOptions options = new JsonSerializerOptions
        {
            WriteIndented = true,
            Converters = { new JsonStringEnumConverter() }
        };
        string jsonString = JsonSerializer.Serialize(listaPersone, options);
        System.IO.File.WriteAllText("persone.json", jsonString);
    }

    public static List<Persona> CaricaPersone()
    {
        if (System.IO.File.Exists("persone.json"))
        {
            JsonSerializerOptions options = new JsonSerializerOptions
            {
                WriteIndented = true,
                Converters = { new JsonStringEnumConverter() }
            };
            string jsonFromFile = System.IO.File.ReadAllText("persone.json");
            List<Persona>? prodottiFile = JsonSerializer.Deserialize<List<Persona>>(jsonFromFile, options) ?? new List<Persona>();
            listaPersone = prodottiFile;
            return prodottiFile;
        }
        return listaPersone;
    }

    [HttpGet("persone")]
    public IEnumerable<Persona> GetPersone()
    {
        return listaPersone;
    }

    [HttpPost("persone")]
    public IActionResult AddPersona([FromBody] Persona persona)
    {
        if (persona.Id == Guid.Empty)
        {
            persona.Id = Guid.NewGuid();
        }

        listaPersone.Add(persona);
        SalvaPersone();
        return Ok(true);
    }

    [HttpPut("persone")]
    public IActionResult UpdatePersona([FromBody] Persona persona)
    {
        var giaEsistente = listaPersone.FirstOrDefault(p => p.Id == persona.Id);
        if (giaEsistente == null)
        {
            return NotFound("Persona non trovata");
        }

        giaEsistente.Nome = persona.Nome;
        giaEsistente.Cognome = persona.Cognome;
        giaEsistente.DataDiNascita = persona.DataDiNascita;
        giaEsistente.Dominio = persona.Dominio;
        giaEsistente.Email = persona.Email;
        SalvaPersone();

        return Ok(true);
    }

    [HttpDelete("persone")]
    public IActionResult DeletePersona([FromQuery] Guid id)
    {
        var persona = listaPersone.FirstOrDefault(p => p.Id == id);
        if (persona == null)
        {
            return NotFound("Persona non trovata");
        }

        listaPersone.Remove(persona);
        SalvaPersone();
        return Ok(true);
    }
}
