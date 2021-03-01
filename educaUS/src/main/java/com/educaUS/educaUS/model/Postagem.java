package com.educaUS.educaUS.model;

import java.util.Date;

//import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name= "postagem")
public class Postagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date postdate = new java.sql.Date(System.currentTimeMillis());
	
	@NotNull
	private Long visualizacao;
	
	@NotNull
	private Long curtida;
	
	@NotNull
	@Size(min = 1, max = 500)
	private String descricao;
	
	@NotNull
	@Size(min = 1, max = 250)
	private String comentario;
	
	@ManyToOne
	@JsonIgnoreProperties("postagem")
	private Temas temas;
	
	@ManyToOne
	@JsonIgnoreProperties ("postagem")
	private Usuario usuario;
	
	

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

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

	public Long getVisualizacao() {
		return visualizacao;
	}

	public void setVisualizacao(Long visualizacao) {
		this.visualizacao = visualizacao;
	}

	public Long getCurtida() {
		return curtida;
	}

	public void setCurtida(Long curtida) {
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

	public Temas getTemas() {
		return temas;
	}

	public void setTemas(Temas temas) {
		this.temas = temas;
	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
