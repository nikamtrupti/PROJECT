package com.trg.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trg.springboot.model.Client;
@Repository
public interface ClientRepository extends JpaRepository<Client,Long> {

}
 