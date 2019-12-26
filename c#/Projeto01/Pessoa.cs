namespace Projeto01
{
    public class Pessoa
    {
        private string nome;
        private string idade;

        public string getNome() => this.nome;
        public void setNome(string nome) => this.nome = nome;

        public string getIdade() => this.idade;

        public void setIdade(string idade) => this.idade = idade;
    }
}