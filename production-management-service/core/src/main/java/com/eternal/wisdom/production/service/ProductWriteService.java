package com.eternal.wisdom.production.service;

import com.eternal.wisdom.production.exception.ProcessNotFoundException;
import com.eternal.wisdom.production.exception.ProductNotFoundException;
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
        if(in.getId() == null){
            throw new ProductNotFoundException("Product not found with this id");
        }
        return productOrderRepositoryPort.update(in);

        /*productOrderRepositoryPort.getById(in.getId()).orElseThrow((() ->
                new ProductNotFoundException("Product not found with id" + in.getId())));
        return productOrderRepositoryPort.update(in);*/
    }

    @Override
    public void delete(Integer id) {
        if(id == null){
            throw new ProductNotFoundException("Product not found with this id");
        }
        productOrderRepositoryPort.delete(id);

    }
}
