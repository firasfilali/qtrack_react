package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.model.Product;
import com.eternal.wisdom.production.ports.api.product.WriteProductPort;
import com.eternal.wisdom.production.ports.spi.product.ProductOrderRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductWriteService implements WriteProductPort {
    private final ProductOrderRepositoryPort productOrderOutputPort;
    @Override
    public Product create(Product in) {
        return productOrderOutputPort.create(in);
    }

    @Override
    public Product update(Product in) {
        return productOrderOutputPort.update(in);
    }

    @Override
    public void delete(Integer integer) {
        productOrderOutputPort.delete(integer);

    }
}
