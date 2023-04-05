package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.model.Process;
import com.eternal.wisdom.production.ports.api.process.WriteProcessPort;
import com.eternal.wisdom.production.ports.spi.process.ProcessRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProcessWriteService implements WriteProcessPort {
    private final ProcessRepositoryPort processRepositoryPort;

    @Override
    public Process create(Process in) {
        return processRepositoryPort.create(in);
    }

    @Override
    public Process update(Process in) {
        return processRepositoryPort.update(in);
    }

    @Override
    public void delete(Integer integer) {
        processRepositoryPort.delete(integer);

    }
}
