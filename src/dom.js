window.dom = {
    find(selector,scope){  //选择器和范围,在规定的范围内找元素
        return (scope || document).querySelectorAll(selector);
    },
    each(nodeList,fn){  // 传入节点列表和一个函数
        for(let i = 0; i < nodeList.length; i++){  // 遍历
            fn.call(null,nodeList[i]); // 对节点列表的每一项调用传入的函数
        }
    },
    style(node, name, value){
        if (arguments.length===3) { // dom.style(div, 'color', 'red')
            node.style[name] = value
        }else if(arguments.length===2){
            if(typeof name === 'string'){ // dom.style(div, 'color')
                return node.style[name]
        }else if(name instanceof Object){// dom.style(div, {color: 'red'})
                const object = name
        for(let key in object){
          node.style[key] = object[key]
        }
      }
    }
  },
}