package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.exception.ProcessNotFoundException;
import com.eternal.wisdom.production.model.Process;
import com.eternal.wisdom.production.model.ProcessOrder;
import com.eternal.wisdom.production.ports.api.process.ReadProcessPort;
import com.eternal.wisdom.production.ports.api.processorder.ReadProcessOrderPort;
import com.eternal.wisdom.production.ports.spi.process.ProcessRepositoryPort;
import com.eternal.wisdom.production.ports.spi.processorder.ProcessOrderRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ProcessOrderReadService implements ReadProcessOrderPort {
    private final ProcessOrderRepositoryPort  processOrderOutputPort;
    @Override
    public ProcessOrder getById(Integer integer) {
        return processOrderOutputPort.getById(integer).orElseThrow((()->
                new ProcessNotFoundException("Process order not found with id " + integer)));
    }

    @Override
    public List<ProcessOrder> getAll() {
        return processOrderOutputPort.getAll();
    }
}
