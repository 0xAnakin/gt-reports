import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const electron = window.require('electron');
const { ipcRenderer } = electron;

function AppCloseModal(args) {

  const [modal, setModal] = useState(false);

  const onYesClick = () => {
    setModal(!modal,()=>{
        ipcRenderer.send('close-app');
    });
  }

  const onNoClick = () => {
    setModal(!modal);
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Τερματισμός εφαρμογής</ModalHeader>
        <ModalBody>
            Ειστέ σίγουρος οτι θέλετε να τερματίσετε την εφαρμογή;
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onYesClick}>
            Ναι
          </Button>{' '}
          <Button color="secondary" onClick={onNoClick}>
            Όχι
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AppCloseModal;