import { render } from "solid-js/web";
import "solid-devtools";

import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "solid-bootstrap";
import UserStatusPanel from "./components/UserStatusPanel";
import DeadlineStatusPanel from "./components/DeadlineStatusPanel";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
    );
}

render(
    () => (
        <Container class="d-flex flex-md-row flex-column">
            <Sidebar />
            <Container>
                <Row>
                    <Col>
                        <UserStatusPanel />
                    </Col>
                    <Col>
                        <DeadlineStatusPanel />
                    </Col>
                </Row>
            </Container>
        </Container>
    ),
    root!,
);
