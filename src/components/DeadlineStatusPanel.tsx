import type { Component, ParentComponent } from "solid-js";

import { Card, ListGroup } from "solid-bootstrap";

const WithDate: ParentComponent<{ date: Date }> = (props) => {
    const dateFormatter = Intl.DateTimeFormat("pt-BR", { dateStyle: "short" });

    return (
        <>
            <b>{dateFormatter.format(props.date)}</b>
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
                {/* biome-ignore-start lint/a11y/useValidAnchor: XXX: will be fixed later */}
                <a href={"#"} class="text-body-secondary">
                    Ver mais...
                </a>
                {/* biome-ignore-end lint/a11y/useValidAnchor: ... */}
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
