import { render } from "solid-js/web";
import "solid-devtools";
import type { Component } from "solid-js";
import style from "/components/styles/Sidebar.module.scss";

const root = document.getElementById("root");
import Logo from "/assets/logo.svg?component-solid";

import { Container, Form, Button, Card } from "solid-bootstrap";

const LoginPage: Component = () => {
    return (
        <Container
            fluid
            class="vh-100 d-flex flex-column justify-content-center align-items-center bg-primary"
        >
            <div class="mb-4 text-center d-flex align-items-center gap-3">
                <Logo class={`${style.logo} image-fluid`} />
                <h2 class="fw-bold text-white">PONTOCERTO</h2>
            </div>

            <Card class="p-4 shadow" style="width:350px">
                <Card.Body>
                    <h4 class="fw-bold text-center mb-2">Bem Vindo</h4>
                    <p class="text-muted text-center small mb-4">
                        Coloque suas credenciais para acessar sua conta
                    </p>

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
                            <a href="/login/reset-password/" class="small">
                                Esqueceu sua senha?
                            </a>
                        </div>
                        <Form.Control
                            type="password"
                            placeholder="Coloque sua senha"
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Check type="checkbox" label="Lembre de mim" />
                    </Form.Group>

                    <Button class="w-100 mb-3" variant="dark">
                        <a class="nav-link" href="/home/">
                            Entrar
                        </a>
                    </Button>

                    <Button class="w-100 mb-3" variant="outline-secondary">
                        <i class="bi bi-google"></i> Entrar com Google
                    </Button>

                    <p class="text-center small mt-3">
                        Não tem conta? <a href="/signup/">Criar conta</a>
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
};
render(
    () => (
        <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
            <LoginPage />
        </div>
    ),
    root!,
);
