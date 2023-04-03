package com.eternal.wisdom.production.ports.api.processorder;

import com.eternal.wisdom.ports.input.WriteCase;
import com.eternal.wisdom.production.model.ProcessOrder;

public interface WriteProcessOrderPort extends WriteCase<ProcessOrder, Integer> {
}
