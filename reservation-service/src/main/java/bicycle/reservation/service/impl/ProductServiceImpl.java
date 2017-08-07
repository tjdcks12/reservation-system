package bicycle.reservation.service.impl;

import bicycle.reservation.service.ProductService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class ProductServiceImpl implements ProductService {

    @Transactional(readOnly = true)
    public List<Map<String, Object>> getProduct() {
        return null;
    }

}


