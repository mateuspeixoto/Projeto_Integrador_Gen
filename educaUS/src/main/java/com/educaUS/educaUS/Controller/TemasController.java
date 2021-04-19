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

import com.educaUS.educaUS.Repository.TemasRepository;
import com.educaUS.educaUS.model.Temas;

@RequestMapping("/temas")
@RestController
@CrossOrigin("*")
public class TemasController {
	
	@Autowired
	private  TemasRepository repository;
    
	@GetMapping
	public  ResponseEntity<List<Temas>> getAll() {
		return ResponseEntity.ok(repository.findAll());
	}
    
	@GetMapping("/{id}")
	public ResponseEntity<Temas> getById(@PathVariable Long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
    
	@GetMapping("/temas/{nome}")
	public  ResponseEntity<List<Temas>> getNome(@PathVariable String nome) {
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}
    
	@PostMapping
	public ResponseEntity<Temas> postTemas(@RequestBody Temas temas) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(temas));
	}

	@PutMapping
	public  ResponseEntity<Temas> putTemas(@RequestBody Temas temas) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(temas));
	}
    
	@DeleteMapping("/{id}")
	public  void deleteTemas(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
