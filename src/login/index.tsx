import { render } from "solid-js/web";
import "solid-devtools";
import type { Component } from "solid-js";
import style from "/components/styles/Sidebar.module.scss";

const root = document.getElementById("root");
import Logo from "/assets/logo.svg?component-solid";

import { Form, Button, Card } from "solid-bootstrap";

const LoginPage: Component = () => {
    return (
        <div class="mx-auto d-flex flex-column justify-content-center align-items-center">
            <div class="text-center d-flex align-items-center gap-3 pb-3">
                <Logo class={`${style.logo} image-fluid`} />
                <h2 class="fw-bold text-white">PONTOCERTO</h2>
            </div>

            <Card class="p-4 shadow my-3" style="width:350px">
                <Card.Body>
                    <h4 class="fw-bold text-center mb-2">Bem-vindo</h4>
                    <p class="text-muted text-center small mb-4">
                        Insira suas credenciais para acessar sua conta
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
                        </div>
                        <Form.Control
                            type="password"
                            placeholder="Insira sua senha"
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Check type="checkbox" label="Lembre-se de mim" />
                    </Form.Group>

                    <Button class="w-100 mb-3" variant="dark">
                        <a class="nav-link" href="/home/">
                            Entrar
                        </a>
                    </Button>

                    <Button class="w-100 mb-3" variant="outline-secondary">
                        <i class="bi bi-lock-fill"></i> Entrar usando passkeys
                    </Button>

                    <p class="text-center small mt-3">
                        Não tem conta? <a href="/signup/">Criar conta</a>
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
};
render(
    () => (
        <div
            class="d-flex flex-md-row flex-columni bg-primary overflow-y-scroll"
            style="height: 100dvh;"
        >
            <LoginPage />
        </div>
    ),
    root!,
);
