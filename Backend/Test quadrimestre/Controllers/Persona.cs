using Microsoft.AspNetCore.Mvc;
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
    public bool AddPersona(Persona persona)
    {
        if (persona.Id == Guid.Empty)
        {
            persona.Id = Guid.NewGuid();
        }
        return true;
    }

    [HttpPut("persone")]
    public bool UpdatePersona([FromBody] Persona persona, [FromQuery] string valore)
    {
        return true;
    }
   
}
