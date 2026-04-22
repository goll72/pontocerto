import type { Component } from "solid-js";
import { createSignal, Show } from "solid-js";

import { Button, Card, Form, OverlayTrigger, Tooltip } from "solid-bootstrap";

const SignupPage: Component = () => {
    const [authenticationType, setAuthenticationType] =
        createSignal("password");

    return (
        <div class="m-auto">
            <Card class="p-4 shadow my-4" style="width:350px">
                <Card.Body>
                    <h4 class="fw-bold text-center mb-2">Registre</h4>
                    <p class="text-muted text-center small mb-4">
                        Bem vindo à maior plataforma ERP
                    </p>

                    <Form.Group class="mb-3 d-flex justify-content-between gap-3">
                        <div>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="firstname"
                                placeholder="Miguel"
                            ></Form.Control>
                        </div>

                        <div>
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control
                                type="secondname"
                                placeholder="Rufino"
                            ></Form.Control>
                        </div>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>Endereço de e-mail</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="nome@exemplo.com"
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="00.000.000/0000-00"
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>Certificado A1</Form.Label>
                        <Form.Control type="file"></Form.Control>

                        <div class="d-flex flex-row-reverse text-body-secondary">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="t-why-passkeys">
                                        O certificado digital (ou certificado
                                        A1) serve para realizar a validação da
                                        sua identidade, ou seja, confirmar que
                                        você representa o CPNJ que está tentando
                                        cadastrar. O certificado é armazenado de
                                        forma segura em nosso servidor.
                                    </Tooltip>
                                }
                            >
                                <span style="font-size: 0.8em;" class="mt-1">
                                    <i class="bi bi-question-circle-fill"></i>
                                    <span class="ms-2">
                                        O que é isso? Por que preciso enviar?
                                    </span>
                                </span>
                            </OverlayTrigger>
                        </div>
                    </Form.Group>

                    <Form.Group class="mb-3">
                        <Form.Label>
                            Escolha uma forma de autenticação
                        </Form.Label>
                        <Form.Check
                            checked
                            type="radio"
                            id="authentication-type"
                            name="authentication-type"
                            label="Senha"
                            onClick={() => setAuthenticationType("password")}
                        />
                        <Form.Check
                            type="radio"
                            id="authentication-type"
                            name="authentication-type"
                            label="Passkeys"
                            onClick={() => setAuthenticationType("passkey")}
                        />
                        <div class="d-flex flex-row-reverse text-body-secondary">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="t-why-passkeys">
                                        Passkeys são mais seguras que senhas,
                                        pois elas nunca saem do seu dispositivo,
                                        e são mais convenientes para você
                                        (usuário), que não vai ter que se
                                        preocupar em memorizar mais uma senha.
                                    </Tooltip>
                                }
                            >
                                <span style="font-size: 0.8em;" class="mt-1">
                                    <i class="bi bi-question-circle-fill"></i>
                                    <span class="ms-2">
                                        Por que eu deveria usar passkeys?
                                    </span>
                                </span>
                            </OverlayTrigger>
                        </div>
                    </Form.Group>

                    <Show when={authenticationType()} keyed={true}>
                        {(authType) => {
                            if (authType === "password") {
                                return (
                                    <Form.Group class="mb-3">
                                        <div class="d-flex justify-content-between">
                                            <Form.Label>Senha</Form.Label>
                                        </div>
                                        <Form.Control
                                            type="password"
                                            placeholder="Crie uma senha"
                                        ></Form.Control>
                                    </Form.Group>
                                );
                            } else {
                                return <></>;
                            }
                        }}
                    </Show>

                    <Form.Group class="mb-3" style="font-size: 0.9em;">
                        {/* XXX: make this an `a` tag eventually */}
                        <Form.Check
                            type="checkbox"
                            label="Eu concordo com os termos de serviço"
                        />
                    </Form.Group>

                    <Button class="w-100 mb-3" variant="dark">
                        <a class="nav-link" href="/login/">
                            Registrar
                        </a>
                    </Button>

                    <p class="text-center small mt-3">
                        Já tem uma conta? <a href="/login/">Fazer login</a>
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default () => (
    <div
        class="d-flex flex-md-row flex-column bg-primary overflow-y-scroll"
        style="height: 100dvh;"
    >
        <SignupPage />
    </div>
);
