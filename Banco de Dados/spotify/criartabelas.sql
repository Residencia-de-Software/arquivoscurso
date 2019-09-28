--Criacao de tabelas

create table artista(
id integer primary key autoincremente,
nome text not null,
popularidade integer,
seguidores integer);

create table genero(
id integer primary key not null,
nome text not null
);

create table artista_genero(
id integer primary key autoincrement not null,
id_artista intege not null,
id_genero integer not null,
foreign key (id_artista) references artista(id),
foreign key (id_genero) references genero(id)
);


