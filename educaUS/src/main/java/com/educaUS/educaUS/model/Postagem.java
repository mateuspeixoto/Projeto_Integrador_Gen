package com.educaUS.educaUS.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name= "postagem")
public class Postagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date postdate = new java.sql.Date(System.currentTimeMillis());
	
	@NotNull
	private int visualizacao;
	
	@NotNull
	private int curtida;
	
	@NotNull
	@Size(min = 1, max = 500)
	private String descricao;
	
	@NotNull
	@Size(min = 1, max = 250)
	private String comentario;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
