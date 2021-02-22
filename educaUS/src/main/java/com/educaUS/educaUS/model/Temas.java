package com.educaUS.educaUS.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;

@Entity @Table(name= "temas") public class Temas {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) public long id_tema;
	
	@NotNull public String tema;
	
	@NotNull public String categoria;
	
	@NotNull public String cursos;

	public long getId_tema() {
		return id_tema;
	}

	public void setId_tema(long id_tema) {
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
