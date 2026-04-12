import type { Component } from "solid-js";
import style from "./styles/Sidebar.module.scss";

import Logo from "/assets/logo.svg?component-solid";

const Sidebar: Component = () => {
    return (
        <div class={`d-flex flex-md-column flex-row p-2 p-md-3 bg-primary ${style.color} text-white align-items-center py-2 py-md-3`}>
            <div class="d-flex flex-row mb-1 px-2 gap-3">
                <Logo class={`${style.logo} image-fluid`}/>
                <a
                    class="nav-link icon-link"
                    aria-current="page"
                    href="/home/" onclick={(e) => {
                        if(window.location.pathname === "/home/"){
                            e.preventDefault();
                        }
                    }} 
                >
                    <h1 class="fw-bold font-monospace d-none d-md-inline">
                        PONTO
                        <br />
                        CERTO
                    </h1>
                </a>
                
            </div>

            <ul class="nav nav-pills flex-md-column flex-row justify-content-md-start justify-content-center gap-2">
                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        aria-current="page"
                        href="/orders/" onclick={(e) => {
                            if(window.location.pathname === "/orders/"){
                                e.preventDefault();
                            }
                        }}
                    >
                        <i class={`bi bi-box ${style.icon}`}></i>
                        <span class="mx-3 fw-bold fs-5 d-none d-md-inline">Pedido</span>
                    </a>

                </li>

                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        aria-current="page"
                        href="/finances/" onclick={(e) => {
                            if(window.location.pathname === "/finances/"){
                                e.preventDefault();
                            }
                        }}
                    >
                        <i class={`bi bi-wallet ${style.icon}`}></i>
                        <span class="mx-3 fw-bold fs-5 d-none d-md-inline">Caixa</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        aria-current="page"
                        href="/documents/" onclick={(e) => {
                            if(window.location.pathname === "/documents/"){
                                e.preventDefault();
                            }
                        }}
                    >
                        <i class={`bi bi-folder ${style.icon}`}></i>
                        <span class="mx-3 fw-bold fs-5 d-none d-md-inline">Documentos</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a
                        class="nav-link icon-link icon-link-hover text-white gap-1"
                        style="--bs-icon-link-transform: translate3d(0, -.51rem, 0);"
                        href="/suppliers/" onclick={(e) => {
                            if(window.location.pathname === "/suppliers/"){
                                e.preventDefault();
                            }
                        }}
                    >
                        <i class={`bi bi-buildings ${style.icon}`}></i>
                        <span class="mx-3 fw-bold fs-5 d-none d-md-inline">Fornecedores</span>
                    </a>
                </li>
            </ul>

            <div class="mt-auto py-1 px-2 d-flex justify-content-center justify-content-md-start">
                    <a
                      class="d-inline-flex align-items-center text-white text-decoration-none px-1 py-1 rounded"
                      href="/home/"
                    >
                      <i class={`bi bi-box-arrow-left fs-5 ${style.icon}`}></i>
                      <span class="ms-1 fw-bold d-none d-md-inline fs-5">Sair</span>
                    </a>
            </div>
        </div>
    );
};

export default Sidebar;
