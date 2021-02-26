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

	private @Autowired TemasRepository repository;

	public @GetMapping ResponseEntity<List<Temas>> getAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	public @GetMapping("/{id_tema}") ResponseEntity<Temas> getById(@PathVariable Long id_tema) {
		return repository.findById(id_tema).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}

	public @GetMapping("/tema/{tema}") ResponseEntity<List<Temas>> getTema(@PathVariable String tema) {
		return ResponseEntity.ok(repository.findAllByTemaContainingIgnoreCase(tema));
	}

	public @PostMapping ResponseEntity<Temas> postTema(@RequestBody Temas temas) {
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(temas));
	}

	public @PutMapping ResponseEntity<Temas> putTema(@RequestBody Temas temas) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(temas));
	}

	public @DeleteMapping("/{id_tema}") void deleteTema(@PathVariable Long id_tema) {
		repository.deleteById(id_tema);
	}
}
