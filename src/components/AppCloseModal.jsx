import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { APP } from '../store/enums';

const electron = window.require('electron');
const { ipcRenderer } = electron;

function AppCloseModal(args) {

	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.appReducer.appCloseModalVisible)

	const onYesClick = () => {
		dispatch({
			type: APP.HIDE_APP_CLOSE_MODAL
		})

		setTimeout(() => {
			ipcRenderer.send('close-app');
		}, 300)
	}

	const onNoClick = () => {
		dispatch({
			type: APP.HIDE_APP_CLOSE_MODAL
		})
	}

	return (
		<div>
			<Modal isOpen={isOpen} centered={true} {...args}>
				<ModalHeader>Τερματισμός εφαρμογής</ModalHeader>
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