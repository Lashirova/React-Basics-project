

let names =['Maysa', 'Zerrin', 'Done', "Zeynep"];
let congrats=[<h2 >Congratulations</h2>,<h3>React is awesome</h3>
];

const Greeting = (
  <div> 
  <h1>Hello World</h1> 

  {/* <div>{congrats}</div> */}
  </div>
)
class HelloMessage extends React.Component {
  render(){
    return (
    <div>
     <h1>Hello from Component</h1>
     <HelloNames nam={names}/>
     <div>{this.props.con[0]}
     {this.props.con[1]}
     </div>
    </div>
    );
  }
}
function App() {
  return (
<div>
   <h2>Hello from Function</h2>
   
   <HelloMessage con={congrats}  />
</div>
  );
}
class HelloNames extends React.Component {
  render(){
    return (
      <NoteList>
       {this.props.nam.map(function (name, index){   
        return <p key ={index}>Hello {name}!!!
        </p> 
     })}
     </NoteList>
    )
  }}
  class NoteList extends React.Component {
    render(){
      console.log(this.props.children)
      return (
      <ol>
         { this.props.children.map(function (item){   
return <li key ={item.key} className={ item.key ===  0 ? "first" : item.key === 1 ?  "second" :  item.key === 2 ?"third": ''}> {item}
   </li> 
  })}
      </ol>
      )}}

      



ReactDOM.render(
  <App />,
  document.getElementById("example")
);



// let arr =['Maya', 'Leyla', 'Aman', "Mesut"]
// let congrats=[<h2 >Congratulations</h2>,<h3>React is awesome</h3>
// ];
// ​
// const blogPost = (
//     <div className='card'> 
//       <h1>Hello World</h1> 
//       <ol>
//       { arr.map(function (name, index){   
//     return <li key ={index} className={ index ===  0 ? "first" :  index === 1 ?  "second" :  index === 2 ?"third": ''}> {name}
//     </li> 
// })}
// </ol>
// <div>{congrats.map(function(element, index){
//   return <div key ={index}>{element}</div>
// })}
// </div>
//     </div>
//   );
// ​
// ​
// ReactDOM.render(
//     blogPost,
//     document.getElementById("example")
// )