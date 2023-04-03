package com.eternal.wisdom.common.ports.input;

public interface WriteCase<T, ID> {

    T create(T in);
    T update(T in);
    void delete(ID id);
}
