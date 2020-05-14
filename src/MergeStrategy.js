//合并策略：开始


/**
 * 合并的结果会按顺序包含 parent 和 child ;
 * @param parent
 * @param child
 * @param vm
 * @returns [parent,child]

 注意：
 Vue 的 合并策略 mergeHook 有个bug，原码如下：


 // Hooks and props are merged as arrays.
 function mergeHook (
 parentVal,
 childVal
 ) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)  //这里应该先判断 parentVal 是否是数组
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}
 */
export function includeAllWihtArray_MergeStrategy(parentVal, childVal, vm) {

  return childVal
      ? parentVal
          ? Array.isArray(parentVal)
              ? parentVal.concat(childVal)
              : [parentVal].concat(childVal)
          : Array.isArray(childVal)
              ? childVal
              : [childVal]
      : parentVal
}

//合并策略：结束




