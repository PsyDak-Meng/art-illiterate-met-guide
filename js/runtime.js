// Tiny component base: holds props/state and re-renders the page on setState.
class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
  }
  setState(patch) {
    Object.assign(this.state, typeof patch === "function" ? patch(this.state) : patch);
    if (window.__rerender) window.__rerender();
  }
}
