using System;

namespace Projeto01
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno aluno = new Aluno();
            Funcionario funcionario = new Funcionario();
            Professor professor = new Professor();
            Console.Write("Digite o nome do aluno: ");
            aluno.setNome(Console.ReadLine());
            Console.WriteLine("O nome do aluno é: {0}", aluno.getNome());
        }
    }
}
