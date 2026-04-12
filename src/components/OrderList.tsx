import { For, Index, Show, type Component } from "solid-js";

import style from "./styles/OrderList.module.scss";

import {
    Button,
    Col,
    Container,
    FormControl,
    InputGroup,
    Row,
    Accordion,
    Badge,
} from "solid-bootstrap";

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
    let total = props.order.amountsPerSize.reduce((prev, curr) => prev + curr);
    let totalFinished = props.order.amountsPerSizeFinished.reduce(
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
                <div class="d-flex flex-row gap-5">
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
                    {/* XXX: this is horrible */}
                    <Show when={props.order.expectedEndDate}>
                        {(date) => (
                            <div>
                                <span class="fw-bold">
                                    Data de Término Prevista
                                </span>
                                <p>
                                    {date()
                                        .getUTCDate()
                                        .toString()
                                        .padStart(2, "0")}
                                    /
                                    {(date().getUTCMonth() + 1)
                                        .toString()
                                        .padStart(2, "0")}
                                    /{date().getUTCFullYear().toString()}
                                </p>
                            </div>
                        )}
                    </Show>
                    <Show when={props.order.actualEndDate}>
                        {(date) => (
                            <div>
                                <span class="fw-bold">Data de Término</span>
                                <p>
                                    {date()
                                        .getUTCDate()
                                        .toString()
                                        .padStart(2, "0")}
                                    /
                                    {(date().getUTCMonth() + 1)
                                        .toString()
                                        .padStart(2, "0")}
                                    /{date().getUTCFullYear().toString()}
                                </p>
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
            <Row class="gap-0 row-gap-3">
                {/* NOTE: O column span do md é maior que o column span
                            do xs porque esse é o threshold para a sidebar
                            trocar de orientação. (a sidebar ocupa uma
                            quantidade considerável de espaço horizontal)
                 */}
                <Col xs={12} sm={3} md={4} lg={3}>
                    <span class="h2">Pedidos</span>
                </Col>
                <Col xs={12} sm={9} md={7} lg={6} class="d-flex gap-3">
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
                    xs={{ span: 4, offset: 8 }}
                    md={{ span: 6, offset: 6 }}
                    lg={{ span: 3, offset: 0 }}
                    class="d-flex flex-row-reverse"
                >
                    <Button variant="primary">
                        <i class="bi bi-plus"></i> Novo pedido
                    </Button>
                </Col>
            </Row>
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
