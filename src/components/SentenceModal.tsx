import PropTypes from 'prop-types';
import React from 'react';

type SentenceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SentenceModal = ({ isOpen, onClose, children }: SentenceModalProps) => {
  if (!isOpen) return null;

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };

  const modalStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '66%',
    maxHeight: '80%',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    position: 'relative',
    overflow: 'scroll',
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    border: 'none',
    background: 'none',
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

SentenceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default SentenceModal;
