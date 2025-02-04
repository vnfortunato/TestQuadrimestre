using Microsoft.AspNetCore.Mvc;
using System;
using Test_quadrimestre.Dto;

namespace Test_quadrimestre.Controllers;

[ApiController]
[Route("api")]
public class PersonaController : ControllerBase
{

   public List<Persona> listaPersone = new List<Persona>();

    Persona persona1 = new Persona()
    {
        Id = Guid.NewGuid(),
        Nome = "Lello",
        Cognome = "Laforgia",
        DataDiNascita = new DateTime(2005, 10, 07),
        Dominio = Dominio.Studente,
        Email = "asdsa@gmail.com"
    };
    
    

    public PersonaController()
    {
        listaPersone.Add(persona1);
    }


    [HttpGet("persone")]
    public IEnumerable<Persona> GetPersone()
    {
        return listaPersone;
    }

    [HttpPost("persone")]
    public IActionResult AddPersona([FromBody] Persona persona)
    {
        if (persona == null)
        {
            return BadRequest("Persona non valida");
        }

        if (persona.Id == Guid.Empty)
        {
            persona.Id = Guid.NewGuid();
        }

        listaPersone.Add(persona);
        return Ok(true);
    }

    [HttpPut("persone")]
    public IActionResult UpdatePersona([FromBody] Persona persona, [FromQuery] string valore)
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
        return Ok(true);
    }
}
