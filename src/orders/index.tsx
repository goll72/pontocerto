import { render } from "solid-js/web";
import "solid-devtools";

import Content from "components/Content";
import OrderList from "components/OrderList";
import Sidebar from "components/Sidebar";

const root = document.getElementById("root");

render(
    () => (
        <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
            <Sidebar />
            <Content class="flex-column flex-md-row gap-5 p-3">
                <OrderList />
            </Content>
        </div>
    ),
    root!,
);
