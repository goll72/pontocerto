import type { Component } from "solid-js";

import {
    Button,
    Col,
    Container,
    FormControl,
    InputGroup,
    Row,
} from "solid-bootstrap";

const OrderList: Component = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={3} lg={2}>
                    <h3>Pedidos</h3>
                </Col>
                <Col xs={10} sm={9} md={6} class="d-flex gap-3">
                    <InputGroup>
                        <Button variant="light" class="border-dark-subtle">
                            <i class="bi bi-search"></i>
                        </Button>
                        <FormControl
                            placeholder="Buscar..."
                            aria-label="Barra de pesquisa"
                        />
                    </InputGroup>
                    <Button variant="light" class="border-dark-subtle">
                        <i class="bi bi-filter-right"></i>
                    </Button>
                </Col>
                <Col
                    xs={{ span: 2, offset: 2 }}
                    md={3}
                    lg={{ span: 4, offset: 0 }}
                >
                    <Button variant="primary">
                        <i class="bi bi-plus"></i> Novo pedido
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderList;
