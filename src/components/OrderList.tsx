import { For, type Component, type JSX } from "solid-js";

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
    status: "paid" | "delivered" | "finished" | "pending" | "not-started";
};

const DUMMY_ORDERS: Order[] = [
    {
        supplier: "Fornecedor Foo",
        description: "Pedido XYZ",
        amountsPerSize: [300, 150, 225, 120],
        amountsPerSizeFinished: [300, 150, 225, 120],
        status: "paid",
    },
];

const OrderItem: Component<{ id: string; order: Order }> = (props) => {
    let total = props.order.amountsPerSize.reduce((prev, curr) => prev + curr);
    let totalFinished = props.order.amountsPerSizeFinished.reduce(
        (prev, curr) => prev + curr,
    );

    const possibleBadges: { [K in Order["status"]]: () => JSX.Element } = {
        paid: () => <Badge bg="primary"></Badge>,
        delivered: () => <Badge bg="success">Entregue</Badge>,
        finished: () => <Badge bg="finished">Pronto</Badge>,
        pending: () => <Badge bg="warning">Em produção</Badge>,
        "not-started": () => <Badge bg="danger">Não iniciado</Badge>,
    };

    const badge = possibleBadges[props.order.status];

    return (
        <Accordion.Item eventKey={props.id}>
            <Accordion.Header>
                <div class="w-100">
                    <i class={`bi bi-box ${style["icon-bold"]}`}></i>
                    {props.order.description}
                </div>
                {badge()}
                <Button
                    variant="body"
                    class="mx-3"
                    on:click={(event) => event.stopPropagation()}
                >
                    <i class="bi bi-pencil-square text-body-secondary align-top"></i>
                </Button>
            </Accordion.Header>
            <Accordion.Body></Accordion.Body>
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
                        <OrderItem id={`${index}`} order={order} />
                    )}
                </For>
            </Accordion>
        </Container>
    );
};

export default OrderList;
