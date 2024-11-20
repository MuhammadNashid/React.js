// import React from "react"
// import ListComp from "./components/ListComp";
// class App extends React.Component{
//   state={
//     count:0
//   }
//   increment=()=>{
//     this.setState({count:this.state.count+=1})
//   }
//   decrement=()=>{
//     this.setState({count:this.state.count-=1-0})
//   }
//   render(){
//     return(
//       <>
//     <button onClick={this.increment}>Click Me</button>
//     <ListComp count={this.state.count}/>
//     <button onClick={this.decrement}>Click Me De</button>
//     <ListComp count={this.state.count}/>
//       </>
//     )
//   }
// }
// export default App



// import React from "react";

// class App extends React.Component{
//   state={task:"",todo:[]}
// changeData=(e)=>{
//   this.setState
//   ({task:e.target.value})
// }
// addTask=()=>{
//   this.setState({todo:[...this.state.todo,this.state.task]})
// }
// deleteTask = (index) => {
//   this.setState({todo: this.state.todo.filter((_, ind) => ind !== index),});
// }
// render(){
//   console.log(this.state);
  
//   return(
//     <>
//     <input type="text" onChange={this.changeData} />
//     <button onClick={this.addTask}>ADD</button>

//     <ul>
//           {this.state.todo.map((td, ind) => (<li key={ind}>{td}
//               <button onClick={() => this.deleteTask(ind)}>Delete</button>
//             </li>
//           ))}
//         </ul>
   
//     </>
//   )
// }
// }
// export default App


// Life Cycle components


// import React from "react";
// class App extends React.PureComponent{
//   state={
//     count:5,
//   }
//   addTask=()=>{
//     this.setState({count:10})
//   }
//   // componentDidMount(){
//   //   alert("Hello")
//   // }
//   // componentWillUnmount(){
//   //   console.log("hii");
    
//   // }
//   render(){
//     console.log(this.state);

//     return(
//       <>
//         <button onClick={this.addTask}>Add</button> 
//       </>
//     )
    
//   }
// }
// export default App

// import React from "react";
// class App extends React.PureComponent{

//     name=React.createRef()
//     age=React.createRef()

//     handleSubmit=(e)=>{
//       e.preventDefault();
//       console.log(this.name.value);
//       console.log(this.age.value);  
//     }

//   render(){
//     console.log(this.state);

//     return(
//       <>
//         <form action="">
//           <input type="text" placeholder="Name" ref={input=>this.name=input}/>
//           <input type="text" placeholder="age" ref={input=>this.age=input}/>
//           <button onClick={this.handleSubmit}>Click</button> 
//         </form>
       
//       </>
//     )  
//   }
// }
// export default App

import React from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Child3 from "./components/child3";
import Child4 from "./components/child4";
class App extends React.PureComponent {


  render(){
    console.log(this.state);

    return(
      <>
        <BrowserRouter>
        <Routes> 
          <Route path="/" Component={Child1}/>
          <Route path="/child2" Component={Child2}/>
          <Route path="/child3" Component={Child3}/>
          <Route path="/child4" Component={Child4}/>
        </Routes>
        </BrowserRouter>
      </>
    )

  }
}
export default App