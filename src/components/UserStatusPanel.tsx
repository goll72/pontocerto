import type { Component } from "solid-js";

import { Button, Container, Image, Row } from "solid-bootstrap";

import style from "./styles/UserStatusPanel.module.scss";

const MESSAGES: [string, string][] = [
    ["Os que esperam no Senhor renovam as suas forças.", "(Isaías 40:31)"],
    [
        "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.",
        "(Romanos 8:28)",
    ],
    [
        "O choro pode durar uma noite, mas a alegria vem pela manhã.",
        "(Salmos 30:5)",
    ],
];

const UserStatusPanel: Component = () => {
    return (
        <Container class={`my-auto ${style.root}`}>
            <div class={style["pfp-container"]}>
                <Image src="/dummy-pfp.png" roundedCircle class={style.pfp} />
                <div
                    class={`position-absolute ${style["pfp-plus-icon-background"]}`}
                    on:click={() => {
                        /* XXX: make this show a popup where the user can change their pfp eventually */
                        console.error("Not implemented");
                    }}
                ></div>
                <i
                    class={`position-absolute bi bi-plus-circle-fill ${style["pfp-plus-icon"]}`}
                ></i>
            </div>
            <Row>
                <h3 class="pt-4 pb-2 text-center">Olá, Usuário!</h3>
            </Row>
            <p class="pb-3 text-body-secondary text-center">
                {(() => {
                    const [message, source] =
                        MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

                    return (
                        <>
                            <p class="mx-2">&ldquo;{message}&rdquo;</p>
                            {source}
                        </>
                    );
                })()}
            </p>
            <hr />
            <div class="pt-3 d-flex flex-direction-row justify-content-around">
                <Button variant="light" class="rounded-circle">
                    <i class="bi bi-whatsapp text-body-secondary"></i>
                </Button>
                <Button variant="light" class="rounded-circle">
                    <i class="bi bi-envelope text-body-secondary"></i>
                </Button>
            </div>
        </Container>
    );
};

export default UserStatusPanel;
