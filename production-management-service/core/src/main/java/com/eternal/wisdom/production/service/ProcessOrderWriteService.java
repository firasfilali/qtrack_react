package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.model.Process;
import com.eternal.wisdom.production.model.ProcessOrder;
import com.eternal.wisdom.production.ports.api.process.WriteProcessPort;
import com.eternal.wisdom.production.ports.api.processorder.WriteProcessOrderPort;
import com.eternal.wisdom.production.ports.spi.process.ProcessRepositoryPort;
import com.eternal.wisdom.production.ports.spi.processorder.ProcessOrderRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProcessOrderWriteService implements WriteProcessOrderPort {
    private final ProcessOrderRepositoryPort processOrderRepositoryPort;
    @Override
    public ProcessOrder create(ProcessOrder in) {
        return processOrderRepositoryPort.create(in);
    }

    @Override
    public ProcessOrder update(ProcessOrder in) {
        return processOrderRepositoryPort.update(in);
    }

    @Override
    public void delete(Integer id) {
        processOrderRepositoryPort.delete(id);

    }
}
