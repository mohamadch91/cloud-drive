/**
 * constant for define Global function 
 * or pass functions beetween components
 * @constant eventBus for event bus 
 */
const eventBus = {
  /**
   * 
   * @param {event} event event to be passed to call on event
   * @param {*} callback 
   */
  on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  },
  /**
   * when call this function then it will trigger the event
   * 
   * @param {event} event 
   * @param {component} data 
   */
  dispatch(event, data) {
   
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  /**
   * remove event listener from event bus
   * 
   * @param {*} event 
   * @param {*} callback 
   */
  remove(event, callback) {
    document.removeEventListener(event, callback);
  },
};

export default eventBus;
