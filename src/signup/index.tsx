import { render } from "solid-js/web";
import "solid-devtools";
import type { Component } from "solid-js";

const root = document.getElementById("root");

import { Container, Form, Button, Card } from "solid-bootstrap";

const SignupPage: Component = () => {
    return (
        <Container
            fluid
            class="vh-100 d-flex flex-column justify-content-center align-items-center bg-primary"
        >
            <Card class="p-4 shadow" style="width:350px">
                <Card.Body>
                    <h4 class="fw-bold text-center mb-2">Registre</h4>
                    <p class="text-muted text-center small mb-4">
                        Bem vindo à maior plataforma ERP
                    </p>

                    <Form.Group class="mb-3 d-flex justify-content-between gap-3">
                        <div>
                            <Form.Label>Primeiro Nome</Form.Label>
                            <Form.Control
                                type="firstname"
                                placeholder="Miguel"
                            ></Form.Control>
                        </div>

                        <div>
                            <Form.Label>Segundo Nome</Form.Label>
                            <Form.Control
                                type="secondname"
                                placeholder="Rufino"
                            ></Form.Control>
                        </div>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>Endereço Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="nome@exemplo.com"
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <div class="d-flex justify-content-between">
                            <Form.Label>Senha</Form.Label>
                        </div>
                        <Form.Control
                            type="password"
                            placeholder="Crie uma senha"
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Eu concordo com os termos de Serviços"
                        />
                    </Form.Group>

                    <Button class="w-100 mb-3" variant="dark">
                        <a class="nav-link" href="/login/">
                            Registrar
                        </a>
                    </Button>

                    <Button class="w-100 mb-3" variant="outline-secondary">
                        <i class="bi bi-google"></i> Entrar com Google
                    </Button>

                    <p class="text-center small mt-3">
                        Já tem uma conta? <a href="/login/">Login</a>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};
render(
    () => (
        <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
            <SignupPage />
        </div>
    ),
    root!,
);
