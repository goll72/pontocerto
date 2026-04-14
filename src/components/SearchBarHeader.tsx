import type { Component } from "solid-js";

import { Button, Col, FormControl, InputGroup, Row } from "solid-bootstrap";

/**
 * Cabeçalho com um título, barra de pesquisa, botão para realizar filtragem
 * e um botão para criar um novo item. O título e o texto do botão são customizáveis.
 *
 * Esse componente é responsivo, usando um layout de 3 linhas em telas pequenas,
 * 2 linhas em telas médias e 1 linha em telas grandes.
 *
 * @remarks
 * Esse componente deve usar dentro de um `Container`.
 */
const SearchBarHeader: Component<{
    title: string;
    buttonText: string;
}> = (props) => {
    return (
        <Row class="gap-0 row-gap-3">
            {/* NOTE: O column span do md é maior que o column span
                        do xs porque esse é o threshold para a sidebar
                        trocar de orientação. (a sidebar ocupa uma
                        quantidade considerável de espaço horizontal)
             */}
            <Col xs={12} sm={4} md={6} lg={3}>
                <span class="h2">{props.title}</span>
            </Col>
            <Col xs={12} sm={8} md={6} class="d-flex gap-3">
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
                <Button variant="primary" class="text-white">
                    <i class="bi bi-plus"></i> {props.buttonText}
                </Button>
            </Col>
        </Row>
    );
};

export default SearchBarHeader;
