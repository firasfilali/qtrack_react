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
public class ProcessReadService implements ReadProcessPort {
    private final ProcessRepositoryPort processRepositoryPort;


    @Override
    public Process getById(Integer id) {
        return processRepositoryPort.getById(id).orElseThrow((() ->
                new ProcessNotFoundException("Process not found with id")));

    }

    @Override
    public List<Process> getAll() {
        return processRepositoryPort.getAll();
    }
}
