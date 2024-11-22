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

// import React from "react";
// import Child1 from "./components/Child1";
// import Child2 from "./components/Child2";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Child3 from "./components/child3";
// import Child4 from "./components/child4";
// class App extends React.PureComponent {


//   render(){
//     console.log(this.state);

//     return(
//       <>
//         <BrowserRouter>
//         <Routes> 
//           <Route path="/" Component={Child1}/>
//           <Route path="/child2" Component={Child2}/>
//           <Route path="/child3" Component={Child3}/>
//           <Route path="/child4" Component={Child4}/>
//         </Routes>
//         </BrowserRouter>
//       </>
//     )

//   }
// }
// export default App


// 1.useState

// import './App.css'
// import Todo from './Todo'
// function App() {
//   const ls=["a","b","c","d","e","f"]

//   return (
//     <>
//       <ul>
//         {
//           ls.map((l,ind)=><Todo val={l}/>)
//         }
//       </ul>
//     </>
//   )
// }

// export default App

// 2.Count 


// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [count, SetCount] = useState(0);

  
//   const increment = () => {
//     SetCount(count + 1);
//   };

  
//   const decrement = () => {
//     if (count > 0) {
//       SetCount(count - 1);
//     }
//   };

//   return (
//     <>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <div>Count: {count}</div>
//     </>
//   );
// }

// export default App;

// 3.prm

// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count,SetCount]=useState(0)
//   const increment=()=>{
//     SetCount(count+1)
//   }
//   return (
//     <>
//      <button onClick={increment}>Count{count}</button>
//     </>
//   )
// }

// export default App

// 4. Todo task


// import { useState } from "react";
// import './App.css';

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [editIndex, setEditIndex] = useState(null); 
//   const [editValue, setEditValue] = useState("");

//   const addTodo = () => {
//     if (inputValue.trim()) {
//       setTodos([...todos, { text: inputValue, completed: false }]);
//       setInputValue("");
//     }
//   };

//   const toggleTodo = (index) => {
//     setTodos(
//       todos.map((todo, i) =>
//         i === index ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };
//   const removeTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   const startEdit = (index) => {
//     setEditIndex(index);
//     setEditValue(todos[index].text); 
//   };

//   const saveEdit = () => {
//     if (editValue.trim()) {
//       setTodos(todos.map((todo, i) =>i === editIndex ? { ...todo, text: editValue } : todo));
//       setEditIndex(null);
//       setEditValue(""); 
//     }
//   };
//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <div>
//       <input type="text" value={inputValue}onChange={(e) => setInputValue(e.target.value)}placeholder="Add a new task"/>
//       <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {
//           todos.map((todo, index) => (
//           <li key={index} style={{ textDecoration: todo.completed ? "line-through" : "none", }}>
//             {
//               editIndex === index ? (
//               <div>
//                 <input type="text"  value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
//                 <button onClick={saveEdit}>Save</button>
//                 <button onClick={() => setEditIndex(null)}>Cancel</button>
//               </div>
//             ): 
//               <>
//                 <span onClick={() => toggleTodo(index)}>{todo.text}</span>
//                 <button onClick={() => startEdit(index)}>Edit</button>
//                 <button onClick={() => removeTodo(index)}>Delete</button>
//               </>    
//             }
//           </li>
//         ))
//         }
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;

// 5. multipleuseState

// import { useState } from "react";
// import './App.css';
// function App(){
//   const [val,setVal]=useState({name:"",age:"",cls:""})
//   const handleChange=(e)=>{
//     console.log(e.target.name);
//     console.log(e.target.value);
//     setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
      
//   }
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(val); 
//    }
//    return(
//     <>
//     <form action="">
//         <input type="text" name="name" onChange={handleChange} placeholder="Name" />
//         <input type="text" name="age" onChange={handleChange} placeholder="Age"/>
//         <input type="text" name="cls" onChange={handleChange} placeholder="Class"/>
//         <button onClick={handleSubmit}>Add</button>
//     </form> 
//     </>
//    )
// }
// export default App

// 6.multipleuseState

// import { useState } from "react";
// import './App.css';
// function App(){
//   const [val,setVal]=useState({name:"",age:"",email:"",phone:""})
//   const handleChange=(e)=>{
//     console.log(e.target.name);
//     console.log(e.target.value);
//     setVal((pre)=>({...pre,[e.target.name]:e.target.value}))   
//   }
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(val); 
//    }
//    return(
//     <>
//     <div className="container">
//       <h1>Form</h1>
//     <form action="">
//       <label htmlFor="name" className="a3">Name</label>
//         <input type="text" className="a1" name="name" onChange={handleChange} placeholder="Enter Your Full Name" />
//         <label htmlFor="age" className="a3">Age</label>
//         <input type="text" className="a1" name="age" onChange={handleChange} placeholder="Enter Your Age"/>
//         <label htmlFor="email" className="a3">E-mail</label>
//         <input type="email" className="a1" name="email" onChange={handleChange} placeholder="E-mail"/>
//         <label htmlFor="phone" className="a3">Phone</label>
//         <input type="text" className="a1" name="phone" onChange={handleChange} placeholder="Phone"/>

//         <input type="checkbox" className="a2"/>
//         <input type="checkbox" className="a2"/>
//         <input type="checkbox" className="a2"/>

//         <select id="dropdown">
//           <option>Countries</option>
//           <option>India</option>
//           <option>USA</option>
//           <option>Iran</option>
//         </select>

//         <button onClick={handleSubmit}>Submit</button>
//     </form> 
//     </div>
//     </>
//    )
// }
// export default App