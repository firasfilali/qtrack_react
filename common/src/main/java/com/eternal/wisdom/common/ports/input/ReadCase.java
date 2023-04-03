package com.eternal.wisdom.common.ports.input;

import java.util.List;

public interface ReadCase<T, ID> {

    T getById(ID id);
    List<T> getAll();

}
