import React from 'react';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import './confirmModal.css';

function ConfirmModal(props) {
  const { msg, name } = props.resp

  return (
    <>
      <div className='modal fade bg-blur-modal' id='confirmModal' data-bs-backdrop='static' aria-labelledby='confirmModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-dialog-centered d-flex justify-content-center'>
          <div className='modal-content border-0 p-3 d-flex align-items-center'>
            <h3 className='text-center mb-0 title-confirm fw-bold'>FELICITACIONES</h3>
            <h5 className='mb-0 text-white pt-2 text-uppercase'>{name}</h5>
            <MobileFriendlyIcon className='mt-4' sx={{ color: '#c551da', fontSize: 90 }} />
            <small className='mb-0 text-white py-3 text-below'>{msg}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmModal;