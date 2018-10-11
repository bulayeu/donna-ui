import ReactDOM from "react-dom";

const API = { modal: {} };

const DEFAULT_MODAL_ROOT = "promo_modal_root";

API.modal.mount = content => {
  API.modal.unmount();
  let root = document.getElementById(DEFAULT_MODAL_ROOT);
  if (!root) {
    const div = document.createElement("div");
    div.id = DEFAULT_MODAL_ROOT;
    document.body.appendChild(div);
    root = div;
  }
  ReactDOM.render(content, root);
};

API.modal.unmount = () => {
  const root = document.getElementById(DEFAULT_MODAL_ROOT);
  if (root) ReactDOM.unmountComponentAtNode(root);
};

export default API;
