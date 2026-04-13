import { render } from "solid-js/web";
import "solid-devtools";

import Sidebar from "components/Sidebar";
import Content from "components/Content";
import UserStatusPanel from "components/UserStatusPanel";
import DeadlineStatusPanel from "components/DeadlineStatusPanel";

const root = document.getElementById("root");

render(
    () => (
        <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
            <Sidebar />
            <Content class="flex-column flex-xl-row gap-5">
                <UserStatusPanel />
                <DeadlineStatusPanel />
            </Content>
        </div>
    ),
    root!,
);
