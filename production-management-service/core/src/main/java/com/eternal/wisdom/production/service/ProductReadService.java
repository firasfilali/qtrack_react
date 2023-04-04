package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.exception.ProductNotFoundException;
import com.eternal.wisdom.production.model.Product;
import com.eternal.wisdom.production.ports.api.product.ReadProductPort;
import com.eternal.wisdom.production.ports.spi.product.ProductOrderRepositoryPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class ProductReadService implements ReadProductPort {
    private final ProductOrderRepositoryPort productOrderOutputPort;
    @Override
    public Product getById(Integer integer) {
        return productOrderOutputPort.getById(integer).orElseThrow((() ->
                new ProductNotFoundException("Product not found with id" + integer)));
    }

    @Override
    public List<Product> getAll() {
        return productOrderOutputPort.getAll();
    }
}
