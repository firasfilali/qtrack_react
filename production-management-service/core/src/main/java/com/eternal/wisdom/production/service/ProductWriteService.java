package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.model.Product;
import com.eternal.wisdom.production.ports.api.product.WriteProductPort;
import com.eternal.wisdom.production.ports.spi.product.ProductOrderRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductWriteService implements WriteProductPort {
    private final ProductOrderRepositoryPort productOrderRepositoryPort;
    @Override
    public Product create(Product in) {
        return productOrderRepositoryPort.create(in);
    }

    @Override
    public Product update(Product in) {
        return productOrderRepositoryPort.update(in);
    }

    @Override
    public void delete(Integer id) {
        productOrderRepositoryPort.delete(id);

    }
}
