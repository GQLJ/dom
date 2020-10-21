const div = dom.find('#test>.red')[0] // 获取test里第一个类别为red的元素
console.log(div); 

const divList = dom.find('.red') // 获取多个 div.red 元素
console.log(divList);

dom.each(divList, (n)=> console.log(n));

dom.style(test, 'color', 'red');
console.log(dom.style(test, 'color'));
dom.style(test, {color: 'yellow'});
