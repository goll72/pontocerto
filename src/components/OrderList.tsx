import type { Component } from "solid-js";
import { For, Index, Show } from "solid-js";

import { Accordion, Badge, Button, Container } from "solid-bootstrap";

import style from "./styles/OrderList.module.scss";

import SearchBarHeader from "./SearchBarHeader";

type Order = {
    supplier: string;
    description: string;
    amountsPerSize: number[];
    amountsPerSizeFinished: number[];
    expectedEndDate?: Date;
    actualEndDate?: Date;
    status: "paid" | "delivered" | "finished" | "pending" | "not-started";
};

const DUMMY_ORDERS: Order[] = [
    {
        supplier: "Foo",
        description: "Pedido XYZ",
        amountsPerSize: [300, 150, 225, 120],
        amountsPerSizeFinished: [300, 150, 225, 120],
        status: "paid",
        expectedEndDate: new Date("2026-04-11"),
        actualEndDate: new Date("2026-04-14"),
    },
    {
        supplier: "Foo",
        description: "Pedido ABC",
        amountsPerSize: [100, 38, 0, 44],
        amountsPerSizeFinished: [100, 38, 0, 44],
        status: "finished",
        expectedEndDate: new Date("2026-04-12"),
        actualEndDate: new Date("2026-04-12"),
    },
    {
        supplier: "Quux",
        description: "Pedido UVW",
        amountsPerSize: [200, 0, 0, 0],
        amountsPerSizeFinished: [30, 0, 0, 0],
        status: "pending",
        expectedEndDate: new Date("2026-04-28"),
    },
    {
        supplier: "Nome muito grande",
        description: "Pedido MNP",
        amountsPerSize: [300, 500, 0, 0],
        amountsPerSizeFinished: [0, 0, 0, 0],
        status: "not-started",
    },
];

const OrderItem: Component<{ id: string; order: Order }> = (props) => {
    const dateFormatter = Intl.DateTimeFormat("pt-BR", { dateStyle: "short" });

    const total = props.order.amountsPerSize.reduce(
        (prev, curr) => prev + curr,
    );
    const totalFinished = props.order.amountsPerSizeFinished.reduce(
        (prev, curr) => prev + curr,
    );

    const badgeMap: { [K in Order["status"]]: [string, string] } = {
        paid: ["primary", "Pago"],
        delivered: ["success", "Entregue"],
        finished: ["success", "Pronto"],
        pending: ["warning", "Em produção"],
        "not-started": ["danger", "Não iniciado"],
    };

    const amountMap = ["P", "M", "G", "GG"];

    const [badgeStyle, badgeMessage] = badgeMap[props.order.status];

    return (
        <Accordion.Item eventKey={props.id}>
            <Accordion.Header>
                <div class="w-100">
                    <i class={`bi bi-box ${style["icon-bold"]}`}></i>
                    {props.order.description}
                </div>
                <Badge bg={badgeStyle}>{badgeMessage}</Badge>
                <Button
                    variant="body"
                    class="mx-3"
                    on:click={(event) => event.stopPropagation()}
                >
                    <i class="bi bi-pencil-square text-body-secondary align-top"></i>
                </Button>
            </Accordion.Header>
            <Accordion.Body>
                <div class="d-flex flex-row gap-5 flex-wrap">
                    <div>
                        <span class="fw-bold">Fornecedor</span>
                        <p>{props.order.supplier}</p>
                    </div>
                    <div>
                        <span class="fw-bold">Quantidades</span>
                        <div class="d-flex flex-row gap-4">
                            <Index each={amountMap}>
                                {(tag, index) => {
                                    const partial =
                                        props.order.amountsPerSizeFinished[
                                            index
                                        ];

                                    const total =
                                        props.order.amountsPerSize[index];

                                    if (total === 0) {
                                        return <></>;
                                    }

                                    return (
                                        <div>
                                            <div>{tag()}</div>
                                            <p>
                                                {partial}/{total}
                                            </p>
                                        </div>
                                    );
                                }}
                            </Index>
                        </div>
                    </div>
                    <Show when={props.order.expectedEndDate}>
                        {(date) => (
                            <div>
                                <span class="fw-bold">
                                    Data de Término Prevista
                                </span>
                                <p>{dateFormatter.format(date())}</p>
                            </div>
                        )}
                    </Show>
                    <Show when={props.order.actualEndDate}>
                        {(date) => (
                            <div>
                                <span class="fw-bold">Data de Término</span>
                                <p>{dateFormatter.format(date())}</p>
                            </div>
                        )}
                    </Show>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
};

const OrderList: Component = () => {
    return (
        <Container>
            <SearchBarHeader title="Pedidos" buttonText="Novo Pedido" />
            <Accordion class="py-4">
                <For each={DUMMY_ORDERS}>
                    {(order, index) => (
                        <OrderItem id={`${index()}`} order={order} />
                    )}
                </For>
            </Accordion>
        </Container>
    );
};

export default OrderList;
