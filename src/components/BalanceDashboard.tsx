import type { Component } from "solid-js";
import { For, Show } from "solid-js";

import { Button, Card, Col, Container, ListGroup, Row } from "solid-bootstrap";

import style from "./styles/BalanceDashboard.module.scss";

const PAST_REVENUE = 113059;
const REVENUE = 117340;

const PAST_EXPENSES = 105292;
const EXPENSES = 98714;

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

const dateFormatter = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" });

type Transaction = {
    description: string;
    value: number;
    date: Date;
    hasAttachments: boolean;
};

const TRANSACTIONS: Transaction[] = [
    {
        description: "Aluguel",
        value: -1367,
        date: new Date("2026-04-11"),
        hasAttachments: true,
    },
    {
        description: "Pedido XYZ",
        value: 11950,
        date: new Date("2026-04-09"),
        hasAttachments: true,
    },
    {
        description: "Manutenção de máquinas",
        value: -650,
        date: new Date("2026-04-08"),
        hasAttachments: false,
    },
];

const ValueCardWithComparison: Component<{
    value: number;
    previous?: number;
    title: string;
    icon: string;
}> = (props) => {
    return (
        <Card>
            <div class="py-4 d-flex flex-row justify-content-around">
                <div>
                    <div class="h4 fw-bold">
                        {currencyFormatter.format(props.value)}
                    </div>
                    <div class="text-body-secondary">{props.title}</div>
                </div>
                <i class={`bi bi-${props.icon} ${style["big-icon"]}`}></i>
            </div>
        </Card>
    );
};

const BalanceDashboard: Component = () => {
    const span = REVENUE - EXPENSES > 0 ? 4 : 6;

    return (
        <Container>
            <h3>Saldo</h3>
            <Row class="py-4 gy-3">
                <Col xs={12} lg={span}>
                    <ValueCardWithComparison
                        value={REVENUE}
                        previous={PAST_REVENUE}
                        title="Receita"
                        icon="currency-dollar"
                    />
                </Col>
                <Col xs={12} lg={span}>
                    <ValueCardWithComparison
                        value={EXPENSES}
                        previous={PAST_EXPENSES}
                        title="Despesas"
                        icon="wallet2"
                    />
                </Col>
                <Show when={REVENUE - EXPENSES > 0}>
                    <Col xs={12} lg={span}>
                        <ValueCardWithComparison
                            value={REVENUE - EXPENSES}
                            title="Lucro"
                            icon="graph-up-arrow"
                        />
                    </Col>
                </Show>
            </Row>
            <Card class="my-3">
                <Card.Header class="d-flex flex-row justify-content-between">
                    <span class="fw-bold">Transações recentes</span>
                    {/* XXX: fazer esse anchor apontar para algo */}
                    <a href="#" class="text-body-secondary">
                        Ver mais...
                    </a>
                </Card.Header>
                <Card.Body>
                    <ListGroup variant="flush">
                        <For each={TRANSACTIONS}>
                            {(tx) => (
                                <ListGroup.Item class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <div class="fw-semibold">
                                            {tx.description}
                                        </div>
                                        <div class="text-body-secondary small">
                                            {dateFormatter.format(tx.date)}
                                        </div>
                                    </div>
                                    <div class="d-flex flex-row gap-3">
                                        <div
                                            class={`fw-bold ${
                                                tx.value > 0
                                                    ? "text-success"
                                                    : "text-danger"
                                            }`}
                                        >
                                            {tx.value > 0 ? "+" : ""}
                                            {currencyFormatter.format(tx.value)}
                                        </div>
                                        <Button
                                            variant="light"
                                            class={
                                                tx.hasAttachments
                                                    ? ""
                                                    : style.hidden
                                            }
                                        >
                                            <i class="bi bi-download"></i>
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            )}
                        </For>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default BalanceDashboard;
