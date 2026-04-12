import { render } from "solid-js/web";
import "solid-devtools";

import Sidebar from "components/Sidebar";
import UserStatusPanel from "components/UserStatusPanel";
import DeadlineStatusPanel from "components/DeadlineStatusPanel";

const root = document.getElementById("root");

render(
    () => (
        <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
            <Sidebar />
            <div class="flex-grow-1 d-flex flex-column flex-md-row gap-5 p-3">
                <UserStatusPanel />
                <DeadlineStatusPanel />
            </div>
        </div>
    ),
    root!,
);
