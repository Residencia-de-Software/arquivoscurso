namespace Projeto01
{
    public class Professor : Pessoa
    {
        private string materia;
        private string matricula;

        public string getMateria() => this.materia;
        public void setMateria(string materia) => this.materia = materia;
        public string getMatricula() => this.matricula;
        public void setMatricula(string matricula) => this.matricula = matricula;
    }
}