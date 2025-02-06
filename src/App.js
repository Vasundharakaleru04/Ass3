// function App() {
  // let ele = React.createElement("div",{className:"App"},
  // React.createElement("h1", null, "Header")
  // )
//   let username="kala";
//   return (
//     // <div className="App">
//     //   <h1>vasundhara</h1>
//     //   <input/>
//     //   </div>ele
//     // </div>
  
// );
// // }
// class App extends React.Component{
//   render(){
//   return ()
//     <h1>Function based component </h1>
//   //jSX
//   

// }
// }
//   export default App;

//! component composition
// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/sidebar2'
// import Footer from './components/Footer'
// const App = () =>{
//   <div className='App'>
//     <Navbar/>
//     <Main/>
//     <div className="sidebar">
//       <Sidebar1/>
//       <Sidebar2/>
//     </div>
//     <Footer/>
//   </div>
// }
// export default App()

// //! props
// import React, { Component } from 'react'
// //import CBCPropEx from './propsex/CBCPropEx'
// import FBCPropEx from './propsex/FBCPropEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//         username ="Vassu"
//         age={21}
//         intrests = {["Driving" , "ridging"]}
//         address = {{city:"nalgonda" , area: " NGB colony"}}
//         sendFun={function(){alert("hi am vassu")}}
//         /> */}
//         <FBCPropEx
//         username="varun"
//         ismarried={true}
//         hobbies={["Football", "Scrolling phone", "sleeping"]}
//         />
    
//       </div>
//     )
//   }
// }
import React from 'react'
import FBCStateEx from './stateexample/FBCStateEx'
const App = () => {
  return (
    <div>
      <FBCStateEx/>
      
    </div>
  )
}

export default App









