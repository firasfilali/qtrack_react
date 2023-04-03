package com.eternal.wisdom.common.ports.output;

import java.util.List;
import java.util.Optional;

public interface CrudRepositoryPort<T, ID> {

    T create(T in);
    T update(T in);
    void delete(ID id);
    Optional<T> getById(ID id);
    List<T> getAll();

}
