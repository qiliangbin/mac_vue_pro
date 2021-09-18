/**
 * @el 指令所绑定的元素，可以用来直接操作DOM
 * @binding 指令信息对象
 * @vnode 虚拟dom节点
 */
export const navCurrent = {
  bind(el, binding, vnode){
    const _c = el.getElementsByClassName('nav-item'),
          _activeclass = binding.value.activeClass,
          _index = binding.value.index
          _c[_index].classList.add(`${_activeclass}`)
  },
  update(el,binding, vnode){
    const _c = el.getElementsByClassName('nav-item'),
        _cIndex = binding.value.index,
        _activeclass = binding.value.activeClass,
        _index = binding.oldValue.index
        _c[_index].classList.remove(`${_activeclass}`)
        _c[_cIndex].classList.add(`${_activeclass}`)
  }
}