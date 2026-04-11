import type { Component } from "solid-js";

import style from "./styles/HelloWorld.module.scss";

const HelloWorld: Component = () => {
    return (
        <h1 class={`${style["im-blue-da-ba-dee-da-ba-die"]} ${style.bold}`}>
            Hello World
        </h1>
    );
};

export default HelloWorld;
