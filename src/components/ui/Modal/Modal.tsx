// Modal.tsx
import './Modal.scss';

type ModalProps = {
  children: React.ReactNode;
  onClose: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}

        <button type="button" className="modal-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
