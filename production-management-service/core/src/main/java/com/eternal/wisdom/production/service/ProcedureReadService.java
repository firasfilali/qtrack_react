package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.exception.ProcedureNotFoundException;
import com.eternal.wisdom.production.model.Procedure;
import com.eternal.wisdom.production.ports.api.procedure.ReadProcedurePort;
import com.eternal.wisdom.production.ports.spi.procedure.ProcedureRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ProcedureReadService implements ReadProcedurePort {
    private final ProcedureRepositoryPort procedureRepositoryPort;

    @Override
    public Procedure getById(Integer id) {
        return procedureRepositoryPort.getById(id).orElseThrow((() ->
                new ProcedureNotFoundException("Procedure not found with id" + id)));
    }

    @Override
    public List<Procedure> getAll() {
        return procedureRepositoryPort.getAll();
    }
}
