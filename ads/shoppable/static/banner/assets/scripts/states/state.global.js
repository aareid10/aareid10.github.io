/**
 * This module manages the Global State config.
 * @module StateGlobal
 * @property {object}  global.timing                      - global timing values.
 * @property {number}  global.timing.destinationDelay     - destinationDelay timing value.
 * @property {number}  global.timing.panelClickOutDelay   - panelClickOutDelay timing value.
 * @property {number}  global.timing.panelDisplayDelay    - panelDisplayDelay timing value.
 * @property {number}  global.timing.panelTypeDelay       - panelTypeDelay timing value.
 * @property {number}  global.timing.productOpenDelay     - productOpenDelay timing value.
 * @property {number}  global.timing.productResolveDelay  - productResolveDelay timing value.
 */
const global = {
  timing: {
    initDrawDelay: 1000,
    cycleDelay: 31500,
    destinationDelay: 250,
    panelClickOutDelay: 500,
    panelDisplayDelay: 250,
    panelTypeDelay: 500,
    productOpenDelay: 3000,
    productResolveDelay: 6000
  }
};
export default global;
