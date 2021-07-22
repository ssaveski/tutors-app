/**
 * Checks whether a particular slot is used in component instance
 *
 * ATTENTION: has to be defined as a method on component itself
 * in order to get access to component scope (this)
 **
 * @param     {String}    name
 * @returns   {Boolean}
 */
export function hasSlot (name) {
  if (this.$slots[name]) {
    return true
  }
}
