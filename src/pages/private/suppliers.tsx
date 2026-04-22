import Content from "components/Content";
import Sidebar from "components/Sidebar";
import SuppliersList from "components/SuppliersList";

export default () => (
    <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
        <Sidebar />
        <Content class="flex-column flex-xl-row gap-5">
            <SuppliersList />
        </Content>
    </div>
);
