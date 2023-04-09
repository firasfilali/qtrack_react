package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.exception.ProcedureNotFoundException;
import com.eternal.wisdom.production.model.Procedure;
import com.eternal.wisdom.production.ports.api.procedure.WriteProcedurePort;
import com.eternal.wisdom.production.ports.spi.procedure.ProcedureRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProcedureWriteService implements WriteProcedurePort {

    private final ProcedureRepositoryPort procedureRepositoryPort;
    @Override
    public Procedure create(Procedure in) {
        return procedureRepositoryPort.create(in);
    }

    @Override
    public Procedure update(Procedure in) {
        if(procedureRepositoryPort.getById(in.getId()).isEmpty()){
            throw new ProcedureNotFoundException("Procedure not found with this id");
        }
        return procedureRepositoryPort.update(in);
    }

    @Override
    public void delete(Integer id) {
        if(id == null){
            throw new ProcedureNotFoundException("Procedure not found with this id");
        }
        procedureRepositoryPort.delete(id);

    }
}
