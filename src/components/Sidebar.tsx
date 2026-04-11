import type { Component } from "solid-js";
import style from "./styles/Sidebar.module.scss";

const Sidebar: Component = () => {
    return (
        <div class="d-flex flex-md-column flex-row p-3 bg-primary text-white align-items-center h-100">
            <h1 class="mb-1 fw-bold font-monospace">
                PONTO
                <br />
                CERTO
            </h1>

            <div>
                {(() => {
                    let href: string;

                    if (window.location.pathname.startsWith("/orders")) {
                        href = "#";
                    } else {
                        href = "/orders";
                    }

                    return <a href={href}>abcdef</a>;
                })()}
            </div>

            <ul class="nav nav-pills flex-md-column flex-row gap-2">
                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        aria-current="page"
                        href="#"
                    >
                        <i class={`bi bi-box ${style.icon}`}></i>
                        <span class="mx-3 fw-bold fs-5">Pedido</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        aria-current="page"
                        href="#"
                    >
                        <i class={`bi bi-wallet ${style.icon}`}></i>
                        <span class="mx-3 fw-bold fs-5">Caixa</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        aria-current="page"
                        href="#"
                    >
                        <i class={`bi bi-folder ${style.icon}`}></i>
                        <span class="mx-3 fw-bold fs-5">Documentos</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        aria-current="page"
                        href="#"
                    >
                        <i class={`bi bi-buildings ${style.icon}`}></i>
                        <span class="mx-3 fw-bold fs-5">Fornecedores</span>
                    </a>
                </li>
            </ul>

            <footer class="text-center bg-black mt-auto" style="width: 250px">
                <a
                    class="nav-link active text-white gap-1"
                    aria-current="page"
                    href="#"
                >
                    <i class="bi bi-escape"></i>
                    <span class="mx-3 fw-bold">Sair</span>
                </a>
            </footer>
        </div>
    );
};

export default Sidebar;
