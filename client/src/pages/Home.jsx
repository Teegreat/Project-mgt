import React from "react";

import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddProjectModal from "../components/AddProjectModal";
import AddClientModal from "../components/AddClientModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
