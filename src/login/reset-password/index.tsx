import { render } from "solid-js/web";
import "solid-devtools";
import type { Component } from "solid-js";

const root = document.getElementById("root");

import { Container, Form, Button, Card } from "solid-bootstrap";

const PasswordResetPage: Component = () => {
    return (
        <Container
            fluid
            class="vh-100 d-flex flex-column justify-content-center align-items-center bg-primary"
        >
            <Card class="p-4 shadow" style="width:350px">
                <Card.Body>
                    <h4 class="fw-bold text-center mb-2">Esqueceu a senha?</h4>
                    <p class="text-muted text-center small mb-4">
                        Não tem problema, mandamos um email com as instruções
                    </p>

                    <Form.Group class="mb-3">
                        <Form.Label>Endereço Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="nome@exemplo.com"
                        ></Form.Control>
                    </Form.Group>

                    <Button class="w-100 mb-3" variant="dark">
                        <a class="nav-link" href="/login/">
                            Enviar
                        </a>
                    </Button>

                    <Button class="w-100 mb-3" variant="outline-secondary">
                        <i class="bi bi-google"></i> Entrar com Google
                    </Button>

                    <p class="text-center small mt-3">
                        Já tem uma conta? <a href="/login/">Fazer login</a>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};
render(
    () => (
        <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
            <PasswordResetPage />
        </div>
    ),
    root!,
);
