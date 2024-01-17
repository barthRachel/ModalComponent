import Modal from "./components/ModalComponent/Modal";
import React, { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <div className="App">
      <Modal 
        text={"Your text here"}
        isOpen={openModal}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
