package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.exception.ProcessNotFoundException;
import com.eternal.wisdom.production.model.Process;
import com.eternal.wisdom.production.ports.api.process.ReadProcessPort;
import com.eternal.wisdom.production.ports.spi.process.ProcessRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ProcessOrderReadService implements ReadProcessPort {
    private final ProcessRepositoryPort processOutputPort;
    @Override
    public Process getById(Integer integer) {
        return processOutputPort.getById(integer).orElseThrow((()->
                new ProcessNotFoundException("Process order not found with id " + integer)));
    }

    @Override
    public List<Process> getAll() {
        return processOutputPort.getAll();
    }
}
