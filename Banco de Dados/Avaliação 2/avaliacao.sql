-----------------------------------
-- Criação ------------------------
-----------------------------------

-- 1. Informe o SQL para criação da tabela aluno (4 pontos):

CREATE TABLE aluno(
			matricula integer PRIMARY KEY AUTOINCREMENT NOT NULL ,
			nome varchar(255),
			email varchar(255),
			turma integer(1)
			);

-- 2. Informe o SQL para criação da tabela disciplina (4 pontos):

CREATE TABLE disciplina(
			id_disciplina integer PRIMARY KEY AUTOINCREMENT NOT NULL ,
			nome varchar(255),
			carga_horaria varchar(255)
			);

-- 3. Informe o SQL para criação da tabela pauta (4 pontos):

CREATE TABLE pauta(
			id_pauta integer PRIMARY KEY AUTOINCREMENT NOT NULL,
			matricula integer,
			id_disciplina integer,	
			nota_1 decimal,
			nota_2 decimal,
			nota_3 decimal,
			FOREIGN KEY (matricula) REFERENCES aluno(matricula),
			FOREIGN KEY (id_disciplina) REFERENCES disciplina(id_disciplina)
			);

-- 4. Com o comando ALTER TABLE mude o nome das colunas nota_1, nota_2 e nota_3 para avaliacao_1, avaliacao_2 e avaliacao_3 (2 pontos):

ALTER TABLE	pauta RENAME COLUMN nota_1 TO avaliacao_1
ALTER TABLE	pauta RENAME COLUMN nota_2 TO avaliacao_2
ALTER TABLE	pauta RENAME COLUMN nota_3 TO avaliacao_3


-----------------------------------
-- Inserção dos dados -------------
-----------------------------------
-- Planilha com os dados a serem inseridos: https://tinyurl.com/y3ngdd5s

-- 1. Informe o SQL para inserção na tabela alunos (3 pontos):

insert into aluno (nome,email,turma) values('Ana Paula Silva','aps@residencia.com.br',1)
insert into aluno (nome,email,turma) values('João Souza','js@residencia.com.br',1)
insert into aluno (nome,email,turma) values('Maria Moreira','mm@residencia.com.br',1)
insert into aluno (nome,email,turma) values('Daiane Costa','dc@residencia.com.br',2)
insert into aluno (nome,email,turma) values('Guilherme Silva','gs@residencia.com.br',1)
insert into aluno (nome,email,turma) values('Júlia Almeida','ja@residencia.com.br',2)
insert into aluno (nome,email,turma) values('Diogo Andrade','da@residencia.com.br',2)
insert into aluno (nome,email,turma) values('Manuela Botelho','mb@gmail.com',1)
insert into aluno (nome,email,turma) values('Thiago Tavares','tt@residencia.com',2)
insert into aluno (nome,email,turma) values('João Pedro Carvalho','jpc@residencia.com.br',1)

-- 2. Informe o SQL para inserção na tabela disciplina (3 pontos):

--<insira o sql aqui>

-- 3. Informe o SQL para inserção dos dados na tabela pauta
-- (note que devem ser inseridos os respectivos identificadores de
-- alunos e disciplinas, não os nomes) (3 pontos):

--<insira o sql aqui>

-----------------------------------
-- Atualização dos dados ----------
-----------------------------------

-- 1. Atualizar o e-mail da aluna Manuela Botelho para mb@residencia.com.br (3 pontos):

--<insira o sql aqui>

-- 2. Atualizar a nota 3 do aluno João Pedro Carvalho em Banco de dados para 7 (3 pontos):

--<insira o sql aqui>

-----------------------------------
-- Consultas ----------------------
-----------------------------------

-- 1. Selecionar o nome e a turma dos alunos (1 ponto):

--<insira o sql aqui>

-- 2. Selecionar a quantidade total de alunos cadastrados (2 pontos):

--<insira o sql aqui>

-- 3. Selecionar a quantidade total de alunos em cada disciplina (4 pontos):

--<insira o sql aqui>

-- 4. Selecionar o nome do aluno, disciplina e as três notas de cada aluno (usando INNER JOIN ou WHERE) (4 pontos):

--<insira o sql aqui>

-- 5. Selecionar o nome dos alunos e a quantidade de disciplinas que cada um cursa (4 pontos):

--<insira o sql aqui>

-- 6. Selecionar o nome, disciplina e a média das três notas de cada aluno (4 pontos):

--<insira o sql aqui>

-- 7. Selecionar o nome, disciplina e a média das três notas dos alunos que tenham média menor que 6 (4 pontos):

--<insira o sql aqui>

-- 8. Selecionar o nome da disciplina e as médias das 3 notas (separadamente) de todos os alunos para cada disciplina (4 pontos):

--<insira o sql aqui>

-- 9. Selecione o aluno com maior nota na avaliação 1 de banco de dados, mostrando qual foi a nota (4 pontos):

--<insira o sql aqui>
