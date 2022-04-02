const eventBus = {
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  dispatch(event, data) {
    console.log("kir khar madar jendeh")
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;
