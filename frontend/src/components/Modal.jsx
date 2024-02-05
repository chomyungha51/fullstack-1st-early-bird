const Modal = ({ open, onClose }) => {
  return (
    open && (
      <div className="fixed top-0 left-0 w-screen h-screen bg-slate-300 bg-opacity-50">
        <div className="absolute top-1/2 left-1/2 bg-white p-10 rounded-2xl">
          modal <button onClick={onClose}>닫기</button>
        </div>
      </div>
    )
  );
};

export default Modal;
