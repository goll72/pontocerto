import type { Component } from "solid-js";
import { For, Index, Show } from "solid-js";

import { Accordion, Badge, Button, Container } from "solid-bootstrap";

import style from "./styles/SupplierList.module.scss";

import SearchBarHeader from "./SearchBarHeader";

type Supplier = {
    name: string;
    email: string;
    telefone: string;
    street: string;
    cep: string;
    uf: string;
    city: string;
    numberstreet: number;
    cnpj: string;
};

const DUMMY_SUPPLIERS: Supplier[] = [
    {
        name: "RENNER S.A",
        email: "renner@example.com",
        telefone: "122",
        street: "Rua Foo",
        cep: "27275",
        uf: "SP",
        city: "Sanca",
        numberstreet: 24,
        cnpj: "245345334",
    },
    {
        name: "RIACHUELO S.A",
        email: "riachuelo@example.com",
        telefone: "122",
        street: "Rua Foo",
        cep: "27275",
        uf: "SP",
        city: "Sanca",
        numberstreet: 33,
        cnpj: "2389789374",
    },
    {
        name: "FOREVER21 S.A",
        email: "forever@example.com",
        telefone: "122",
        street: "Rua Foo",
        cep: "27275",
        uf: "SP",
        city: "Sanca",
        numberstreet: 13,
        cnpj: "2191824",
    },
    {
        name: "C&A S.A",
        email: "cea@example.com",
        telefone: "122",
        street: "Rua Foo",
        cep: "27275",
        uf: "SP",
        city: "Sanca",
        numberstreet: 3,
        cnpj: "624786344",
    },
];

const OrderItem: Component<{ id: string; supplier: Supplier }> = (props) => {
    return (
        <Accordion.Item eventKey={props.id}>
            <Accordion.Header>
                <div class="w-100">
                    <i class={`bi bi-buildings ${style["icon-bold"]}`}></i>
                    {props.supplier.name}
                </div>
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
                        <span class="fw-bold">CNPJ</span>
                        <p>{props.supplier.cnpj}</p>
                    </div>
                    <div>
                        <span class="fw-bold">E-mail</span>
                        <p>{props.supplier.email}</p>
                    </div>
                    <div>
                        <span class="fw-bold">Telefone</span>
                        <p>{props.supplier.telefone}</p>
                    </div>
                    <div>
                        <span class="fw-bold">Endereço</span>
                        <p>
                            {props.supplier.street}, nº{" "}
                            {props.supplier.numberstreet}
                        </p>
                    </div>
                    <div>
                        <span class="fw-bold">CEP</span>
                        <p>{props.supplier.cep}</p>
                    </div>
                    <div>
                        <span class="fw-bold">Cidade</span>
                        <p>{props.supplier.city}</p>
                    </div>
                    <div>
                        <span class="fw-bold">UF</span>
                        <p>{props.supplier.uf}</p>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
};

const SuppliersList: Component = () => {
    return (
        <Container>
            <SearchBarHeader
                title="Fornecedores"
                buttonText="Novo Fornecedor"
            />
            <Accordion class="py-4">
                <For each={DUMMY_SUPPLIERS}>
                    {(order, index) => (
                        <OrderItem id={`${index()}`} supplier={order} />
                    )}
                </For>
            </Accordion>
        </Container>
    );
};

export default SuppliersList;
