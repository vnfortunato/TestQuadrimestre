﻿namespace Test_quadrimestre.Dto;

public class Persona
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public string Cognome { get; set; }
    public DateTime DataDiNascita { get; set; }
    public Dominio Dominio { get; set; }
    public string Email { get; set; }
}
