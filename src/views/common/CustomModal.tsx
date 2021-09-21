import React , { useState } from 'react';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#121212',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 6,
	pb: 3,
};

interface ICustomModal {
	title: any;
	message: string | undefined;
	action: any;
}

export default function CustomModal({title, message, action}: ICustomModal) {
	const [open, setOpen] = useState(true);

	const handleClose = () => {
		setOpen(false);
		action();
	};

	return (
		<div>
			<Modal
				open={open}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={{ ...style }}>
					<h2 id="parent-modal-title">{title}</h2>
					<div id="parent-modal-description" style={{ color: 'white' , fontSize: '1.1rem' , lineHeight: '1.5'}}>
						{message}
					</div>
					<div style={{ paddingTop: '1.5rem' , paddingLeft: '250px' }}>
						<Button onClick={handleClose}>
							<div style={{ fontWeight: 'bold' , fontSize: '1.1rem' , color: 'rgb(144, 202, 249)' }}>OK</div>
						</Button>
					</div>
				</Box>
			</Modal>
		</div>
	);
}