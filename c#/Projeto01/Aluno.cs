namespace Projeto01
{
    public class Aluno : Pessoa
    {
        private string matricula;

        public string getMatricula() => this.matricula;

        public void setMatricula(string matricula) => this.matricula = matricula;
    }
}