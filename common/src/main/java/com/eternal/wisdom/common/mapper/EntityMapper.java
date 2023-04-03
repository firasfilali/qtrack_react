package com.eternal.wisdom.common.mapper;

public interface EntityMapper<ENTITY, IN, OUT> {

    ENTITY toEntity(IN in);

    OUT toDto(ENTITY entity);

}
