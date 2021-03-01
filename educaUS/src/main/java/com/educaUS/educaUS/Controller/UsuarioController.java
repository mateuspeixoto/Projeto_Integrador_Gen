package com.educaUS.educaUS.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.educaUS.educaUS.Repository.UsuarioRepository;
import com.educaUS.educaUS.model.Usuario;

@RestController
@RequestMapping("/usuario")
@CrossOrigin("*")
public class UsuarioController {
	
	@Autowired
	private UsuarioRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> FindAllUsuario(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> FindByIdUsuario(@PathVariable Long id){
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/nome/{nome}")
	public ResponseEntity<List<Usuario>> FindByNomeUsuario(@PathVariable String nome){
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}
	@PostMapping
	public ResponseEntity<Usuario> postUsuario (@RequestBody Usuario usuario){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(usuario));
	}
	
	@PutMapping
	public ResponseEntity<Usuario> putUsuario (@RequestBody Usuario usuario){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(usuario));
	}
		
	@DeleteMapping("/{id}")
	public void deleteUsuario(@PathVariable Long id) {
		repository.deleteById(id);
	}
	

	

}
