package com.educaUS.educaUS.model;

import java.util.Date;

import javax.annotation.Generated;
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
	
	private Long fk_id_usuario;
	
	private Long fk_id_tema;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getPostdate() {
		return postdate;
	}

	public void setPostdate(Date postdate) {
		this.postdate = postdate;
	}

	public int getVisualizacao() {
		return visualizacao;
	}

	public void setVisualizacao(int visualizacao) {
		this.visualizacao = visualizacao;
	}

	public int getCurtida() {
		return curtida;
	}

	public void setCurtida(int curtida) {
		this.curtida = curtida;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public Long getFk_id_usuario() {
		return fk_id_usuario;
	}

	public void setFk_id_usuario(Long fk_id_usuario) {
		this.fk_id_usuario = fk_id_usuario;
	}

	public Long getFk_id_tema() {
		return fk_id_tema;
	}

	public void setFk_id_tema(Long fk_id_tema) {
		this.fk_id_tema = fk_id_tema;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
