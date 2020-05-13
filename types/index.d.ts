import Vue,{VNode,CreateElement,VNodeData} from "vue"


interface VNodeTag {
    tag?:string|null;
    name?:string|null
}


//获取tag和name：开始

/**
 * 获取虚拟节点的 tag 和 name
 * @param vNode : VNode
 * @return {tag,name}
 */
export function getVNodeTagAndName(vNode:VNode):VNodeTag;






/**
 * 从 虚拟节点vNode 和 其对应的 Vue实例 vueInst 上获取 tag 和 name
 * @param vNode : VNode
 * @param vueInst : VueComponent
 * @return {tag,name}
 */
export function getTagAndNameFrom(vNode:VNode,vueInst:Vue):VNodeTag;





//获取tag和name：结束











/**
 * 获取虚拟节点的文本内容
 * @param vNode : VNode   虚拟节点
 * @param separator : string    子节点文本内容的分隔符；默认值： `,`
 * @return string     vNode 的文本内容
 */

export function getVNodeTextContent(vNode:VNode,separator?:string):string|null|undefined;








/**
 * 获取虚拟节点 及其 子节点中的第一个 click事件处理器 或 to 或 link
 * @param vNode
 * @return function
 */
export function getVNodeClickHandle (vNode:VNode):Function|null|undefined;


interface ButtonOptions {
    text?:string|null;
    click?:Function|null;
}




/**
 * 从 虚拟节点 上解析出 ButtonOptions
 * @param vNode : VNode 虚拟节点
 * @return ButtonOptions
 *
 *
 * ButtonOptions 类型的定义是 :
 * ButtonOptions = {text:string,click:function}
 */
export function parseButtonOptionsFromVNode(vNode:VNode):ButtonOptions;











/**
 * 从 虚拟节点列表 上解析出 ButtonOptions 列表
 * @param vNodeList : Array<VNode> 虚拟节点列表
 * @return Array<ButtonOptions>
 *
 *
 * ButtonOptions 类型的定义是 :
 * ButtonOptions = {text:string,click:function}
 */
export function parseButtonOptionsListFromVNodeList(vNodeList:VNode[]):ButtonOptions[];













//克隆结点：开始



interface CloneVNodeOpts {
    data ? : object;     //可选；一个包含模板相关属性的数据对象；这样，您可以在 template 中使用这些属性。可选参数。
    resetDate ? : boolean;    //可选；默认值：false ； 是否要重置 data ，当值为 false 时，会将 options.data 与 原 vnode 的数据混合，原 vnode 中重复的 data 属性会被覆盖；当值为 true 时，如果 options.data 被设置，则会使用 options.data ，如果 options.data 没有被设置，则会使用 原 vnode 中的 data
    children ? : VNode[];     //可选；子节点 (VNodes)数组
    deepClone ? : boolean;    //可选； 是否进行深度克隆
}


/**
 * 通过创建新节点的方式 克隆 vnode
 * @param vnode : VNode
 * @param createElement : function     创建元素的函数
 * @param options ? : Object   可选的其它参数
 * @param options.data ? : Object     可选；一个包含模板相关属性的数据对象；这样，您可以在 template 中使用这些属性。可选参数。
 * @param options.resetDate ? : boolean    可选；默认值：false ； 是否要重置 data ，当值为 false 时，会将 options.data 与 原 vnode 的数据混合，原 vnode 中重复的 data 属性会被覆盖；当值为 true 时，如果 options.data 被设置，则会使用 options.data ，如果 options.data 没有被设置，则会使用 原 vnode 中的 data
 * @param options.children ? : Array<VNode>     可选；子节点 (VNodes)数组
 * @param options.deepClone ? : boolean    可选； 是否进行深度克隆
 * @return VNode    返回克隆的节点
 */
export function cloneVNodeUseCreate (vnode:VNode,createElement:CreateElement,options?:CloneVNodeOpts):VNode;









/**
 * 通过创建新节点的方式克隆一组虚拟节点 vnode
 * @param vnodes : Array<VNode>     虚拟节点数组
 * @param createElement : function     创建元素的函数
 * @param options ? : Object   可选的其它参数
 * @param options.data ? : Object     可选；一个包含模板相关属性的数据对象；这样，您可以在 template 中使用这些属性。可选参数。
 * @param options.resetDate ? : boolean    可选；默认值：false ； 是否要重置 data ，当值为 false 时，会将 options.data 与 原 vnode 的数据混合，原 vnode 中重复的 data 属性会被覆盖；当值为 true 时，如果 options.data 被设置，则会使用 options.data ，如果 options.data 没有被设置，则会使用 原 vnode 中的 data
 * @param options.children ? : Array<VNode>     可选；子节点 (VNodes)数组
 * @param options.deepClone ? : boolean    可选； 是否进行深度克隆
 * @return Array<VNode>    返回克隆的节点
 */
export function cloneVNodesUseCreate (vnodes:VNode[],createElement:CreateElement,options?:CloneVNodeOpts):VNode[];














/**
 * 配置目标节点的上下文使之与源节点的上下文相同
 * @param targetVN : VNode    目标节点
 * @param sourceVN : VNode    源节点
 * @return VNode    修改后的目标节点
 */
export function configSameVnodeContext(targetVN:VNode,sourceVN:VNode):VNode;




interface CloneVNodeOptsUseCopy {
    equivalentVNode?:VNode;   //提供等效上下文的节点
    deepClone?:boolean;     //是否要进行深度克隆
}



/**
 * 通过复制的方法克隆节点
 * @param vnode : VNode   被克隆的节点
 * @param options : Object    选项对象
 * @opetions.equivalentVNode : VNode    提供等效上下文的节点
 * @opetions.deepClone : boolean    是否要进行深度克隆
 *
 * @return VNode
 */
export function cloneVNodeUseCopy(vnode:VNode,options?:CloneVNodeOptsUseCopy):VNode;





/**
 * 通过复制的方法克隆一组节点
 * @param options ?: Object    选项对象
 * @opetions.equivalentVNode : VNode    提供等效上下文的节点
 * @opetions.deepClone : boolean    是否要进行深度克隆
 *
 * @return Array<VNode>
 */
export function cloneVNodesUseCopy(vnodes:VNode[],options?:CloneVNodeOptsUseCopy):VNode[];





//克隆结点：结束












//配置节点：开始

/**
 * 合并vue的 class 或者 style
 * @param item : VueClassObject | VueStyleObject     被合并的项目
 * @returns Array<VueClassObject | VueStyleObject>    合并后的数组
 */
export function mergeClassOrStyle(...items:object[]):any[];















/**
 * 给虚拟节点配置模板数据
 * @param vnodes : VNodes    虚拟节点
 * @param tempData : TemplateData    模板数据，其实就是 VNodeData 类型
 * @returns VNodes     配置好模板数据的虚拟节点
 */




/*

TemplateData（就是 VNodeData 类型） 的结构和含义如下：
注意：目前支持 TemplateData 配置有：props,class,style, attrs，on，key, slot 等等

{
  // 和`v-bind:class`一样的 API
  // 接收一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 和`v-bind:style`一样的 API
  // 接收一个字符串、对象或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML 特性
  attrs: {
    id: 'foo'
  },
  // 组件 props
  props: {
    myProp: 'bar'
  },
  // DOM 属性
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器基于 `on`
  // 所以不再支持如 `v-on:keyup.enter` 修饰器
  // 需要手动匹配 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽格式
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => createElement('span', props.text)
  },
  // 如果组件是其他组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其他特殊顶层属性
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中向多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}
 */
export function configTemplateDataForVNodes(vnode:VNode,tempData:VNodeData):VNode



//配置节点：结束






//vue实例操作：开始

/**
 * forceRecreateSiblingsOfVueInst(vueInst)
 * 强制销毁 并 重新创建 vueInst 及其 父组件的所有子组件；
 * 注意：
 * - 当 vueInst 是最顶层的 vue 实例时，只会强制 更新 $forceUpdate  vue组件实例 vueInst，不会重新创建 vueInst，但会使 vueInst 组件的所有子节点销毁并重新创建
 * - 抽像组件 的子组件的父组件并不是 该 组件 自己，而是 该组件的父组件；比如：keep-alive
 * @param vueInst : VueComponent
 */
export function forceRecreateSiblingsOfVueInst(vueInst:Vue):void;





/**
 * forceRemoveSiblingsOfVueInst(vueInst)
 * 强制 移除 vueInst 及其 父组件的所有子组件；
 * 注意：
 * - 当 vueInst 是最顶层的 vue 实例时，只移除 vueInst 组件的所有子节点
 * - 抽像组件 的子组件的父组件并不是 该 组件 自己，而是 该组件的父组件；比如：keep-alive
 * @param vueInst : VueComponent
 */
export function forceRemoveSiblingsOfVueInst(vueInst:Vue):void;





/**
 * forceRemoveChildrenOfVueInst(vueInst)
 * 强制 移除 vueInst 的所有子组件；
 * 注意：
 * - 抽像组件 的子组件的父组件并不是 该 组件 自己，而是 该组件的父组件；所以 抽像组件的 $children 为 空数组 ；比如：keep-alive
 * @param vueInst : VueComponent
 */
export function forceRemoveChildrenOfVueInst(vueInst:Vue):void;





/**
 * 刷新Vue实例的钩子，仅仅是依次调用 vue 实例的以下生命周期 钩子 ["beforeCreate","created","beforeMount","mounted"]
 * @param vueInst
 * @param incActivated ?: boolean 可选；默认值：false；是否包含 vue 的 activated 生命周期
 */
export function refreshVueInstHooks(vueInst:Vue,incActivated?:boolean):void;





/**
 * 一次调用Vue实例的多个生命周期钩子函数
 * @param vueInst
 * @param hooks : string | [string]   钩子的名字 或 名字列表
 */
export function callVueHooks (vueInst:Vue, hooks:string|string[]):void;








/**
 * 调用Vue实例的生命周期钩子函数
 * @param vueInst
 * @param hook : string   钩子的名字
 */
export function callVueHook (vueInst:Vue, hook:string):void;












/**
 * 刷新Vue实例；
 * 该方法会先销毁 vueInst 然后再执行初始化和挂载操作；
 * 注意：
 * 该方法并不会新创建一个 vueInst ,而是继续用 传入的 vueInst 对象；
 *
 * @param vueInst
 * @param incActivated ?: boolean 可选；默认值：false；是否包含 vue 的 activated 生命周期
 */
export function forceRefreshVueInst(vueInst:Vue,incActivated?:boolean):void;









/**
 * 重新初始化Vue实例；
 * 该方法会直接执行初始化和挂载操作；
 * 注意：
 * 该方法并不会新创建一个 vueInst ,而是继续用 传入的 vueInst 对象；
 *
 * @param vueInst
 * @param incActivated ?: boolean 可选；默认值：false；是否包含 vue 的 activated 生命周期



 知识点：
 - 如果给 vueInst._init(options) 传的参数中配置的有 el 选项，则 _init() 方法会用 el 的值 自动调用 vueInst.$mount(options.el)
 - 对已存在的 vueInst 调用 vueInst.$mount(el) ，会触发挂载操作，并且会自动调用 vueInst 的 beforeMount 生命周期钩子，但不会调用 vueInst 的 mounted 和 activated 钩子；
 - 经研究，发现：vueInst 调用 mounted 的条件是 vueInst.$vnode == null ；
 - 但是 即使把 vueInst.$vnode 和  vueInst._vnode 都设置为 null，在执行到 vueInst.$vnode == null  判断时，vueInst.$vnode 也又有了值；所以，即使在调用 vueInst.$mount(el) 之前 把 vueInst.$vnode 和  vueInst._vnode 都设置为 null，也不会触发 mounted 钩子；
 - 为了简单实现，我们可以在 vueInst.$mount(el) 之后，手动调用 mounted 钩子；

 */
export function reinitVueInst(vueInst:Vue,incActivated?:boolean):void;






//vue实例操作：结束






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
export function includeAllWihtArray_MergeStrategy(parentVal: any, childVal: any, vm: any):any[];

//合并策略：结束
