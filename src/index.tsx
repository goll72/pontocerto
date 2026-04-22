import { render } from "solid-js/web";
import "solid-devtools";

import { Route, Router } from "@solidjs/router";

// Public pages

import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

// Private pages

import DocumentsPage from "./pages/private/documents";
import FinancesPage from "./pages/private/finances";
import HomePage from "./pages/private/home";
import OrdersPage from "./pages/private/orders";
import SuppliersPage from "./pages/private/suppliers";

const root = document.getElementById("root");

render(
    () => (
        <Router>
            <Route path="/login/" component={LoginPage} />
            <Route path="/signup/" component={SignupPage} />

            <Route path="/home" component={HomePage} />
            <Route path="/orders" component={OrdersPage} />
            <Route path="/finances" component={FinancesPage} />
            <Route path="/documents" component={DocumentsPage} />
            <Route path="/suppliers" component={SuppliersPage} />
        </Router>
    ),
    root!,
);
