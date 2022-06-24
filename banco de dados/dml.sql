-- consultar animes
select id_anime		id,
	   nm_anime	    nome
  from tb_anime;
  
  
-- cadastrar filme
insert into tb_anime (nm_anime)
	          values ('Naruto');