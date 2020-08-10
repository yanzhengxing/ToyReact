class ElementWrapper {
  constructor(type){
    this.root = document.createElement(type);
  }
  mountTo(parent){
    parent.appendChild(this.root);
  }
}

class TextWrapper {
  constructor(content){
    this.root = document.createTextNode(content);
  }
  mountTo(parent){
    parent.appendChild(this.root);
  }
}
export let ToyReact = {
  createElement (type, atributes, ...children) {
    let element;
    if(typeof type === "string")
      element = new ElementWrapper(type);
    else
     element = new type;

    for(let name in atributes){
      element.setAttribute(name, atributes[name]);
    }
    for(let child of children){
      if(typeof child === "string")
        child = new TextWrapper(child);
      element.appendChild(child);
    }
    return element;
  },
  render(vdom, element){
    vdom.mountTo(element);
  }
}