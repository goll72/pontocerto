import { render } from "solid-js/web";
import "solid-devtools";

import Content from "components/Content";
import DeadlineStatusPanel from "components/DeadlineStatusPanel";
import Sidebar from "components/Sidebar";
import SuppliersList from "components/SuppliersList";

const root = document.getElementById("root");

render(
    () => (
        <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
            <Sidebar />
            <Content class="flex-column flex-xl-row gap-5">
                <SuppliersList />
            </Content>
        </div>
    ),
    root!,
);
