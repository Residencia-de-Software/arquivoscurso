namespace Projeto01
{
    public class Funcionario : Pessoa
    {
        private string funcao;

        public string getFuncao() => this.funcao;

        public void setFuncao(string funcao) => this.funcao = funcao;
    }
}