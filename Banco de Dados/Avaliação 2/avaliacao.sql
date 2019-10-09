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

ALTER TABLE	pauta RENAME COLUMN nota_1 TO avaliacao_1;
ALTER TABLE	pauta RENAME COLUMN nota_2 TO avaliacao_2;
ALTER TABLE	pauta RENAME COLUMN nota_3 TO avaliacao_3;

-----------------------------------
-- Inserção dos dados -------------
-----------------------------------
-- Planilha com os dados a serem inseridos: https://tinyurl.com/y3ngdd5s

-- 1. Informe o SQL para inserção na tabela alunos (3 pontos):

insert into aluno (nome,email,turma) values
('Ana Paula Silva','aps@residencia.com.br',1),
('João Souza','js@residencia.com.br',1),
('Maria Moreira','mm@residencia.com.br',1),
('Daiane Costa','dc@residencia.com.br',2),
('Guilherme Silva','gs@residencia.com.br',1),
('Júlia Almeida','ja@residencia.com.br',2),
('Diogo Andrade','da@residencia.com.br',2),
('Manuela Botelho','mb@gmail.com',1),
('Thiago Tavares','tt@residencia.com',2),
('João Pedro Carvalho','jpc@residencia.com.br',1);

-- 2. Informe o SQL para inserção na tabela disciplina (3 pontos):

insert into disciplina(nome, carga_horaria) values
('Banco de dados',24),
('Lógica de programação',40),
('Programação backend',44);

-- 3. Informe o SQL para inserção dos dados na tabela pauta
-- (note que devem ser inseridos os respectivos identificadores de
-- alunos e disciplinas, não os nomes) (3 pontos):

insert into pauta(matricula, id_disciplina, avaliacao_1,avaliacao_2,avaliacao_3) values
((select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 10,9,10),
((select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 9,8,7),
((select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Programação backend'), 7,7,9),
((select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 9,6,7),
((select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 10,10,10),
((select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Programação backend'), 9,8,9),
((select matricula from aluno where nome like 'Maria Moreira'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 10,7,7),
((select matricula from aluno where nome like 'Daiane Costa'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 8,6,9),
((select matricula from aluno where nome like 'Daiane Costa'), (select id_disciplina from disciplina where nome like 'Programação backend'), 6,6,8),
((select matricula from aluno where nome like 'Guilherme Silva'), (select id_disciplina from disciplina where nome like 'Programação backend'), 8,6,9),
((select matricula from aluno where nome like 'Diogo Andrade'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 8,8,10),
((select matricula from aluno where nome like 'Manuela Botelho'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 5,7,7),
((select matricula from aluno where nome like 'Thiago Tavares'), (select id_disciplina from disciplina where nome like 'Programação backend'), 5,5,4),
((select matricula from aluno where nome like 'Thiago Tavares'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 7,7,6),
((select matricula from aluno where nome like 'João Pedro Carvalho'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 5,5,2);

-----------------------------------
-- Atualização dos dados ----------
-----------------------------------

-- 1. Atualizar o e-mail da aluna Manuela Botelho para mb@residencia.com.br (3 pontos):

UPDATE aluno 
SET email = 'mb@residencia.com.br' 
WHERE nome = 'Manuela Botelho';

-- 2. Atualizar a nota 3 do aluno João Pedro Carvalho em Banco de dados para 7 (3 pontos):

UPDATE pauta 
SET avaliacao_3 = 7
WHERE matricula = (SELECT matricula FROM aluno WHERE nome = 'João Pedro Carvalho') 
and id_disciplina = (SELECT id_disciplina FROM disciplina WHERE nome = 'Banco de dados');

-----------------------------------
-- Consultas ----------------------
-----------------------------------

-- 1. Selecionar o nome e a turma dos alunos (1 ponto):

SELECT nome,turma FROM aluno;

-- 2. Selecionar a quantidade total de alunos cadastrados (2 pontos):

SELECT COUNT(*) FROM aluno;

-- 3. Selecionar a quantidade total de alunos em cada disciplina (4 pontos):

SELECT d.nome, COUNT(p.matricula) 
from pauta p 
INNER JOIN disciplina d ON p.id_disciplina = d.id_disciplina 
GROUP BY p.id_disciplina;

-- 4. Selecionar o nome do aluno, disciplina e as três notas de cada aluno (usando INNER JOIN ou WHERE) (4 pontos):

SELECT a.nome, d.nome, p.avaliacao_1, p.avaliacao_2, p.avaliacao_3
FROM aluno a
INNER JOIN pauta p ON a.matricula = p.matricula
INNER JOIN disciplina d ON d.id_disciplina = p.id_disciplina;

-- 5. Selecionar o nome dos alunos e a quantidade de disciplinas que cada um cursa (4 pontos):

SELECT a.nome, COUNT(p.id_disciplina)
FROM aluno a
INNER JOIN pauta p ON a.matricula = p.matricula
GROUP BY a.matricula;

-- 6. Selecionar o nome, disciplina e a média das três notas de cada aluno (4 pontos):

SELECT a.nome, d.nome as disciplina, (p.avaliacao_1 + p.avaliacao_2 + p.avaliacao_3)/3 as media
FROM aluno a
INNER JOIN pauta p ON a.matricula = p.matricula
INNER JOIN disciplina d ON d.id_disciplina = p.id_disciplina
GROUP BY a.matricula, p.id_disciplina;

-- 7. Selecionar o nome, disciplina e a média das três notas dos alunos que tenham média menor que 6 (4 pontos):

SELECT a.nome, d.nome as disciplina, (p.avaliacao_1 + p.avaliacao_2 + p.avaliacao_3)/3 as media
FROM aluno a
INNER JOIN pauta p ON a.matricula = p.matricula
INNER JOIN disciplina d ON d.id_disciplina = p.id_disciplina
WHERE media<6
GROUP BY a.matricula, p.id_disciplina;

-- 8. Selecionar o nome da disciplina e as médias das 3 notas (separadamente) de todos os alunos para cada disciplina (4 pontos):

SELECT d.nome as disciplina, avg(p.avaliacao_1),avg(p.avaliacao_2),avg(p.avaliacao_3)
FROM disciplina d 
INNER JOIN pauta p ON p.id_disciplina = d.id_disciplina
GROUP BY d.id_disciplina;

-- 9. Selecione o aluno com maior nota na avaliação 1 de banco de dados, mostrando qual foi a nota (4 pontos):

SELECT a.nome, p.avaliacao_1 
FROM pauta p
INNER JOIN aluno a ON p.matricula = a.matricula
WHERE p.id_disciplina = (SELECT id_disciplina from disciplina WHERE nome = 'Banco de dados')
AND p.avaliacao_1 = (SELECT MAX(avaliacao_1) FROM pauta)

