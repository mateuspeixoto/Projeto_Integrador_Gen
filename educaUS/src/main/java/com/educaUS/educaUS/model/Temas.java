package com.educaUS.educaUS.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity @Table(name= "temas") public class Temas {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id_tema;
	
	@NotNull @Size(min = 2, max = 100) private String tema;
	
	@NotNull @Size(min = 2, max = 100) private String categoria;
	
	@NotNull @Size(min = 2, max = 100) private String cursos;

	public Long getId_tema() {
		return id_tema;
	}

	public void setId_tema(Long id_tema) {
		this.id_tema = id_tema;
	}

	public String getTema() {
		return tema;
	}

	public void setTema(String tema) {
		this.tema = tema;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getCursos() {
		return cursos;
	}

	public void setCursos(String cursos) {
		this.cursos = cursos;
	}
	
}
