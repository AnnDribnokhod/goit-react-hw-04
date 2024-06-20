
import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal ({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      {image && (
        <div className={styles.wrapper}>
          <img src={image.urls.regular} alt={image.alt_description} className={styles.img}/>
          <button onClick={onClose} className={styles.button}>
          <span className={styles.icon}>
             x
            </span>
          </button>
        </div>
      )}
    </Modal>
  );
}
