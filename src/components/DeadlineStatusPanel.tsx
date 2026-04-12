import { Card, ListGroup } from "solid-bootstrap";
import type { Component, ParentComponent } from "solid-js";

const WithDate: ParentComponent<{ date: Date }> = (props) => {
    return (
        <>
            {/* JavaScript indexa meses a partir do zero */}
            <b>
                {props.date.getUTCDate().toString().padStart(2, "0")}/
                {(props.date.getUTCMonth() + 1).toString().padStart(2, "0")}
            </b>
            <span class="mx-3 border-start border-dark-subtle"></span>
            {props.children}
        </>
    );
};

const DeadlineStatusPanel: Component = () => {
    return (
        <Card class="m-auto">
            <Card.Header class="d-flex flex-row justify-content-between">
                <span class="fw-bold">Deadlines</span>
                {/* XXX: fazer esse anchor apontar para algo */}
                <a href="#" class="text-body-secondary">
                    Ver mais...
                </a>
            </Card.Header>
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <WithDate date={new Date("2026-04-30")}>
                            <i class="bi bi-box"></i>
                            <span class="mx-3">Entrega do pedido Foo</span>
                        </WithDate>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <WithDate date={new Date("2026-05-01")}>
                            <i class="bi bi-box"></i>
                            <span class="mx-3">Entrega do pedido Bar</span>
                        </WithDate>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <WithDate date={new Date("2026-05-05")}>
                            <i class="bi bi-currency-dollar"></i>
                            <span class="mx-3">Pagamento de Baz</span>
                        </WithDate>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default DeadlineStatusPanel;
