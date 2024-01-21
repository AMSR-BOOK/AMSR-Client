import React, { useState } from 'react';
import styles from './StatusButton.module.scss';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';
import Modal from 'react-modal';

export default function StatusButton({ status }) {
  const [state, setState] = useState(status);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClick = (newState) => {
    setState(newState);
    setModalIsOpen(false);
  };
  const states = ['WISH', 'READING', 'DONE', 'PAUSED', 'STOPPED'];
  const translateState = (stateToChange) => {
    switch (stateToChange) {
      case 'WISH':
        return '읽고 싶은';
      case 'READING':
        return '읽고 있는';
      case 'DONE':
        return '다 읽은';
      case 'PAUSED':
        return '잠시 멈춘';
      case 'STOPPED':
        return '그만 읽을';
      default:
        return '상태 추가';
    }
  };

  return (
    <div>
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
      >
        {states.map((s) => (
          <button
            onClick={() => handleClick(s)}
            className={s === state && styles.active}
          >
            {translateState(s)}
          </button>
        ))}
        <div className={styles.wrapper}>
          <button
            className={styles.deleteBtn}
            onClick={() => handleClick('NONE')}
          >
            삭제
          </button>
          <button
            className={styles.closeBtn}
            onClick={() => setModalIsOpen(false)}
          >
            닫기
          </button>
        </div>
      </Modal>
      <button
        className={`${styles.btn} ${state !== 'NONE' && styles.active}`}
        onClick={() => setModalIsOpen(true)}
      >
        <span className={styles.text}>{translateState(state)}</span>
        <IoIosArrowDown className={styles.arrow} />
      </button>
    </div>
  );
}
