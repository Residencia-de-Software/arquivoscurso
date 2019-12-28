using System;

namespace Projeto01
{
    class Program
    {
        static void Main(string[] args)
        {

            //Instanciando os Objetos

            Aluno aluno = new Aluno();
            Funcionario funcionario = new Funcionario();
            Professor professor = new Professor();

            //

            Console.Write("Digite o nome do aluno: ");
            aluno.setNome(Console.ReadLine());

            Console.Write("Digite a matricula do aluno: ");
            aluno.setMatricula(Console.ReadLine());

            //

            Console.Write("Digite o nome do funcionario: ");
            funcionario.setNome(Console.ReadLine());

            Console.Write("Digite a funcao do funcionario: ");
            funcionario.setFuncao(Console.ReadLine());

            //

            Console.Write("Digite o nome do professor: ");
            professor.setNome(Console.ReadLine());

            Console.Write("Digite a materia do professor: ");
            professor.setMateria(Console.ReadLine());

            Console.Write("Digite a matricula do professor: ");
            professor.setMatricula(Console.ReadLine());

            //Imprimindo os valores

            Console.WriteLine("Aluno {0}, matricula {1}.", aluno.getNome(), aluno.getMatricula());
            Console.WriteLine("Funcionario {0}, funcao {1}.", funcionario.getNome(), funcionario.getFuncao());
            Console.WriteLine("Professor {0}, materia {1}, matricula {2}.", professor.getNome(), professor.getMateria(), professor.getMatricula());
        }
    }
}
