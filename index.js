import { ToyReact } from "./ToyReact.js";
class MyComponent {
  render(){
    return <div><span>helloword</span></div>
  }
  setAttribute(name, value){
    this[name] = value;
  }
  mountTo(parent) {
    let vdom = this.render();
    vdom.mountTo(parent);
  }
  
}

let a = <MyComponent name="a" id="ida"></MyComponent>
// let b = <div name="a" id="ida">
//   <span>Hello</span>
//   <span></span>
//   <span></span>
// </div>
//document.body.appendChild(b);

ToyReact.render(
  a,
  document.body
)