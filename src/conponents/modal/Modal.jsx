const Modal = ({ children }) => {
  return (
    <>
      {/* The button to open modal */}
      {/* <label htmlFor="my_modal_7" className="btn">
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {children}
          <label
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            htmlFor="my_modal_7"
          >
            ✕
          </label>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default Modal;
