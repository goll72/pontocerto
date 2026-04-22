import Content from "components/Content";
import DocumentsList from "components/DocumentsList";
import Sidebar from "components/Sidebar";

export default () => (
    <div class="d-flex flex-md-row flex-column" style="height: 100dvh;">
        <Sidebar />
        <Content class="flex-column flex-md-row gap-5 p-3">
            <DocumentsList />
        </Content>
    </div>
);
