package com.educaUS.educaUS.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educaUS.educaUS.model.Temas;

@Repository
public interface TemasRepository extends JpaRepository<Temas, Long> {

	public List<Temas> findAllByNomeContainingIgnoreCase(String nome);

}
