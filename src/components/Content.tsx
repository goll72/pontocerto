import type { ParentComponent } from "solid-js";

import style from "./styles/Content.module.scss";

const Content: ParentComponent<{ class: string }> = (props) => {
    return (
        <div class={`d-flex flex-grow-1 p-3 ${props.class} ${style.content}`}>
            {props.children}
        </div>
    );
};

export default Content;
