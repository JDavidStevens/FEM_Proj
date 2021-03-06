import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

class Modal extends React.Component {
  private el = document.createElement("div");

  public componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  // almost always used to clean up memory (remove event listners,extraneous documents. Anything that is going to leak memory)
  public componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  public render() {
    return createPortal(this.props.children, this.el);
  }
}
export default Modal;
