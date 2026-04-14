import type { Component } from "solid-js";
import style from "./styles/Sidebar.module.scss";

import Logo from "/assets/logo.svg?component-solid";

const Sidebar: Component = () => {
    return (
        <div
            class={`position-fixed d-flex flex-md-column flex-row p-2 p-md-3 bg-primary text-white align-items-center py-2 py-md-3 ${style.sidebar}`}
        >
            <div class="d-flex flex-row mb-1 px-2 gap-3">
                <a
                    class="nav-link icon-link"
                    aria-current="page"
                    href="/home/"
                    on:click={(e) => {
                        if (window.location.pathname === "/home/") {
                            e.preventDefault();
                        }
                    }}
                >
                    <Logo class={`${style.logo} image-fluid`} />
                </a>

                <h1 class="fw-bold font-monospace d-none d-md-inline">
                    PONTO
                    <br />
                    CERTO
                </h1>
            </div>

            <ul class="nav nav-pills d-flex flex-row flex-md-column justify-content-between gap-2 w-100 h-100 align-items-center align-items-md-start">
                <div class="d-flex flex-row flex-md-column gap-2">
                    <li class="nav-item">
                        <a
                            class="nav-link icon-link icon-link-hover text-white gap-1"
                            style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                            aria-current="page"
                            href="/orders/"
                            on:click={(e) => {
                                if (window.location.pathname === "/orders/") {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <i class={`bi bi-box ${style["bold-icon"]}`}></i>
                            <span class="mx-3 fw-bold fs-5 d-none d-md-inline">
                                Pedidos
                            </span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link icon-link icon-link-hover text-white gap-1"
                            style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                            aria-current="page"
                            href="/finances/"
                            onclick={(e) => {
                                if (window.location.pathname === "/finances/") {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <i class={`bi bi-wallet ${style["bold-icon"]}`}></i>
                            <span class="mx-3 fw-bold fs-5 d-none d-md-inline">
                                Caixa
                            </span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link icon-link icon-link-hover text-white gap-1"
                            style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                            aria-current="page"
                            href="/documents/"
                            onclick={(e) => {
                                if (
                                    window.location.pathname === "/documents/"
                                ) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <i class={`bi bi-folder ${style["bold-icon"]}`}></i>
                            <span class="mx-3 fw-bold fs-5 d-none d-md-inline">
                                Documentos
                            </span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                            class="nav-link icon-link icon-link-hover text-white gap-1"
                            style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                            href="/suppliers/"
                            onclick={(e) => {
                                if (
                                    window.location.pathname === "/suppliers/"
                                ) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <i
                                class={`bi bi-buildings ${style["bold-icon"]}`}
                            ></i>
                            <span class="mx-3 fw-bold fs-5 d-none d-md-inline">
                                Fornecedores
                            </span>
                        </a>
                    </li>
                </div>

                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        href="/login/"
                    >
                        <i
                            class={`bi bi-box-arrow-left ${style["bold-icon"]}`}
                        ></i>
                        <span class="mx-3 fw-bold fs-5 d-none d-md-inline">
                            Sair
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
