import { For, type Component } from "solid-js";
import { Col, Container, Row, Button } from "solid-bootstrap";

import style from "./styles/DocumentsList.module.scss";

import SearchBarHeader from "./SearchBarHeader";

type Folder = {
    name: string;
    items: number;
};

type File = {
    name: string;
    size: string;
};

const DUMMY_FILES = [
    { name: "relatrorio.pdf", size: "2.4 MB" },
    { name: "contrato.docx", size: "1.1 MB" },
    { name: "Planilha.xlsx", size: "3.0 MB" },
    { name: "ModeloJeans.png", size: "3.0 MB" },
];

const Filecard: Component<{ file: File }> = (props) => {
    return (
        <button
            type="button"
            class="p-3 border rounded d-flex align-items-center gap-3 w-100 bg-white"
            style="cursor: pointer"
        >
            <i class="bi bi-file-earmark fs-3 text-primary"></i>

            <div class="flex-grow-1 text-start">
                <div class="fw-bold text-truncate">{props.file.name}</div>
                <div class="text-muted">{props.file.size}</div>
            </div>
        </button>
    );
};

const DUMMY_FOLDERS: Folder[] = [
    { name: "Contratos de Funcionarios", items: 20 },
    { name: "Exames admissionais/demissional", items: 30 },
    { name: "Licença ambiental", items: 10 },
    { name: "Licença bombeiro", items: 15 },
    { name: "Alvara Municipal", items: 20 },
    { name: "PPRA", items: 20 },
];

const DocumentsList: Component = () => {
    return (
        <Container class="row-gap-3">
            <SearchBarHeader title="Documentos" buttonText="Nova Pasta" />
            <Row class="pb-2 pt-5">
                <Col xs={12}>
                    <span class="h5 fw-bold">Pastas</span>
                </Col>
            </Row>

            <Row class="g-3">
                <For each={DUMMY_FOLDERS}>
                    {(folder) => (
                        <Col xs={6} sm={4} md={3} lg={2}>
                            <button
                                type="button"
                                class={`p-3 border rounded text-center h-100 w-100 bg-white ${style["folder-card"]}`}
                                on:click={() => console.log("clicou")}
                            >
                                <i class="bi bi-folder-fill fs-1 text-warning"></i>
                                <div class="mt-2 fs-6 text-truncate w-100">
                                    {folder.name}
                                </div>
                                <div class="text-muted fs-7 small">
                                    {folder.items} itens
                                </div>
                            </button>
                        </Col>
                    )}
                </For>
            </Row>

            <Row class="pb-2 pt-5">
                <Col xs={12} sm={3} md={4} lg={9}>
                    <span class="h5 fw-bold">Arquivos</span>
                </Col>

                <Col
                    xs={{ span: 4, offset: 8 }}
                    md={{ span: 6, offset: 6 }}
                    lg={{ span: 3, offset: 0 }}
                    class="d-flex flex-row-reverse"
                >
                    <Button variant="primary" class="text-white">
                        <i class="bi bi-upload"></i> Upload
                    </Button>
                </Col>
            </Row>

            <Row class="g-2">
                <For each={DUMMY_FILES}>
                    {(file) => (
                        <Col xs={12} md={6} lg={4}>
                            <Filecard file={file} />
                        </Col>
                    )}
                </For>
            </Row>
        </Container>
    );
};

export default DocumentsList;
