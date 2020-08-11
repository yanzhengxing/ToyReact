import { ToyReact, Component } from "./ToyReact.js";
class MyComponent extends Component{
  render(){
    return( 
      <div>
        <span>helloword</span>
        <span>yanzx</span>
        <p>{this.children}</p>
      </div>
    )
  }
}

let a = <MyComponent name="a" id="ida">
  <div>123</div>
</MyComponent>
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