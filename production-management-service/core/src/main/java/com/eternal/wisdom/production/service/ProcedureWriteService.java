package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.model.Procedure;
import com.eternal.wisdom.production.ports.api.procedure.WriteProcedurePort;
import com.eternal.wisdom.production.ports.spi.procedure.ProcedureRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProcedureWriteService implements WriteProcedurePort {

    private final ProcedureRepositoryPort procedureOutputPort;
    @Override
    public Procedure create(Procedure in) {
        return procedureOutputPort.create(in);
    }

    @Override
    public Procedure update(Procedure in) {
        return procedureOutputPort.update(in);
    }

    @Override
    public void delete(Integer integer) {
        procedureOutputPort.delete(integer);

    }
}
