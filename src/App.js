import "./App.css";
import React from "react";
import "./css/bootstrap.min.css";
import Foto from "./Foto.jpg";
import Mikroskil from "./mikroskil.jpeg"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
    };
  }

  render() {
    const LoginButton = withRouter(({ history }) => (
      <button
        className='btn btn-outline-primary'
        onClick={() => {
          this.setState({ isAuth: true });
          history.push("/profile");
        }}>
        Login
      </button>
    ));
    const LogoutButton = withRouter(({ history }) => (
      <button
        className='btn btn-outline-primary'
        onClick={() => {
          this.setState({ isAuth: false });
          history.push("/login");
        }}>
        Logout
      </button>
    ));
    const routes = [
      {
        path: "/",
        exact: true,
        render: () => (
          <div className='text-center container h1 text-success'>Halaman Utama profile 
            <table className='table table-borderless text-start'>
              <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> <img src={Mikroskil} className='w-5 h-5 border border-2'width='300px' height='300px' /></td>
               </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        path: "/login",
        render: () => (
          <div className='container text-center'>
            <h2 className='fw-bold'>Silahkan  Masukan Login</h2>
            <table className='table table-borderless text-start'>
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>:</td>
                  <td>
                    <input
                      className='border border-dark w-50'
                      type='text'
                      placeholder='Masukkan Username '
                    />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>:</td>
                  <td>
                    <input
                      className='border border-dark w-50'
                      type='text'
                      placeholder='Masukkan Password '
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <LoginButton />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        path: "/profile",
        render: () =>
          this.state.isAuth ? (
            <div className='container text-center'>
              <h2 className='fw-bold'>Profil Mahasiswa Mikroskil</h2>
              <table className='table table-borderless text-start'>
                <tbody>
                  <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td>Aldo Subroto Pamudji</td>
                  </tr>
                  <tr>
                    <td>Nim</td>
                    <td>:</td>
                    <td>192110827</td>
                  </tr>
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>:</td>
                    <td>Laki-Laki</td>
                  </tr>
                  <tr>
                    <td>Tempat Lahir</td>
                    <td>:</td>
                    <td>Medan</td>
                  </tr>
                  <tr>
                    <td>Foto Profil</td>
                    <td>:</td>
                    <td>
                      <img src={Foto} className='w-5 h-5 border border-2'width='300px' height='300px' />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <LogoutButton />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          ) : (
            <Redirect to='/login' />
          ),
      },
    ];
    return (
      <Router>
        <div className='container-fluid'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
              <a className='navbar-brand' href='#'>
                Tugas Minggu 6
              </a>
              <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <NavLink exact className='nav-link text-light' to='/'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      to='/profile'
                      className='nav-link text-light'
                      activeClassName='active'>
                      Profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            {routes.map((item, index) => (
              <Route path={item.path} exact={item.exact} render={item.render} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

//==================================================================================================
// import React, {Component} from 'react';
// class App extends Component {
//   constructor(){
//     super();
//     this.myRef = React.createRef();
//   }

//   componentDidMount(){
//     this.myRef.current.style.height = '100vh';
//     this.myRef.current.style.width = '100%'
//   }
//   setBackground(bgColor,txtColor){
//     this.myRef.current.style.background = bgColor;
//     this.myRef.current.style.color = txtColor;
//   }
  
//   render(){
//     return(
//       <div ref={this.myRef}>
//         <p>Belajar pengembangan aplikasi web dengan Reactjs dengan Router dan Refs</p>
//         <button onClick={this.setBackground.bind(this,'white','black')}>White</button>
//         <button onClick={this.setBackground.bind(this,'red','white')}>Red</button>
//         <button onClick={this.setBackground.bind(this,'green','white')}>Green</button>
//         <button onClick={this.setBackground.bind(this,'blue','white')}>Blue</button>
//       </div>
//     )
//   }
// }
// export default App;
//=======================================================================================
// //Latihan 6.5 MEMBUAT NAVLINK
// import React,{Component} from 'react';
// import{
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   withRouter,
//   NavLink
// } from "react-router-dom";

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       isAuth:false
//     }
//   }
//   render(){
//       const LoginButton = withRouter(({history}) =>(
//         <button onClick={()=>{
//           this.setState({isAuth : true})
//           history.push('/profile')
//         }}>Login</button>
//       ))

//       const LogoutButton = withRouter(({history}) =>(
//         <button onClick={()=>{
//           this.setState({isAuth : false})
//           history.push('/login')
//         }}>Logout</button>
//       )) 

//       const routes =[{
//         path :'/',
//         exact : true,
//         render :()=> <div>Ini halaman Home</div>
//       },{
//         path :'/news',
//         render :()=> <div>Ini Halaaman News</div>
//       },{
//         path :'/login',
//         render :()=> <LoginButton/>
//       },{
//         path :'/profile',
//         render :()=> this.state.isAuth ? <div>Ini Halaman Profile <br/> <LogoutButton/> </div> : <Redirect to='/login'/>
//       }
//       ]

//     return(
//       <Router>
//           <div>
//               <ul style={{listStyle:'none'}}>
//                   <li><NavLink exact activeStyle={{fontWeight: 'bold', color:'red'}} to='/'>Home</NavLink></li>
//                   <li><NavLink activeClassName="active-link" to='/news'>News</NavLink></li>
//                   <li><NavLink  activeClassName="active-link" to='/profile'>Profile</NavLink></li>
//               </ul>
//               <Switch>
//                       {
//                         routes.map((item, index)=>(
//                           <Route path={item.path} exact={item.exact} render={item.render}/>
//                         ))
//                       }
//               </Switch>
//           </div>
//       </Router>
//     )
//   }
// }
// export default App;
//==================================================================================================
// //Latihan 6.4 MEMBUTA DATA ROUTE DENGAN Array 
// import React,{Component} from 'react';
// import{
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   withRouter
// } from "react-router-dom";

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       isAuth:false
//     }
//   }
//   render(){
//       const LoginButton = withRouter(({history}) =>(
//         <button onClick={()=>{
//           this.setState({isAuth : true})
//           history.push('/profile')
//         }}>Login</button>
//       ))

//       const LogoutButton = withRouter(({history}) =>(
//         <button onClick={()=>{
//           this.setState({isAuth : false})
//           history.push('/login')
//         }}>Logout</button>
//       )) 

//       const routes =[{
//         path :'/',
//         exact : true,
//         render :()=> <div>Ini halaman Home</div>
//       },{
//         path :'/news',
//         render :()=> <div>Ini Halaaman News</div>
//       },{
//         path :'/login',
//         render :()=> <LoginButton/>
//       },{
//         path :'/profile',
//         render :()=> this.state.isAuth ? <div>Ini Halaman Profile <br/> <LogoutButton/> </div> : <Redirect to='/login'/>
//       }
//       ]

//     return(
//       <Router>
//           <div>
//               <ul style={{listStyle:'none'}}>
//                   <li><Link to='/'>Home</Link></li>
//                   <li><Link to='/news'>News</Link></li>
//                   <li><Link to='/profile'>Profile</Link></li>
//               </ul>
//               <Switch>
//                       {
//                         routes.map((item, index)=>(
//                           <Route path={item.path} exact={item.exact} render={item.render}/>
//                         ))
//                       }
//               </Switch>
//           </div>
//       </Router>
//     )
//   }
// }
// export default App;
//===============================================================================================
// //Latihan 6.3 WITHROUTER 
// import React,{Component} from 'react';
// import{
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   withRouter
// } from "react-router-dom";

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       isAuth:false
//     }
//   }
//   render(){
//       const LoginButton = withRouter(({history}) =>(
//         <button onClick={()=>{
//           this.setState({isAuth : true})
//           history.push('/profile')
//         }}>Login</button>
//       ))

//       const LogoutButton = withRouter(({history}) =>(
//         <button onClick={()=>{
//           this.setState({isAuth : false})
//           history.push('/login')
//         }}>Logout</button>
//       )) 

//     return(
//       <Router>
//           <div>
//               <ul style={{listStyle:'none'}}>
//                   <li><Link to='/'>Home</Link></li>
//                   <li><Link to='/news'>News</Link></li>
//                   <li><Link to='/profile'>Profile</Link></li>
//               </ul>
//               <Switch>
//                       <Route path='/'exact render={()=> <div>Ini Halaman Home</div>}/>
//                       <Route path='/news'exact render={()=> <div>Ini Halaman News</div>}/>
//                       <Route path='/login'exact render={()=> <LoginButton/> } />
//                       <Route path='/profile'exact render={()=>this.state.isAuth? <div>Ini Halaman Profile <br/> <LogoutButton/></div>:<Redirect to='login'/>}/>
//               </Switch>
//           </div>
//       </Router>
//     )
//   }
// }
// export default App;

//================================================================================================================
// //Latihan 6.2 REDIRECT dengan penggunaan Router Render
// import React,{Component} from 'react';
// import{
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from "react-router-dom";

// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       isAuth:false
//     }
//   }
//   render(){
//     return(
//       <Router>
//           <div>
//               <ul style={{listStyle:'none'}}>
//                   <li><Link to='/'>Home</Link></li>
//                   <li><Link to='/news'>News</Link></li>
//                   <li><Link to='/profile'>Profile</Link></li>
//               </ul>
//               <Switch>
//                       <Route path='/'exact render={()=> <div>Ini Halaman Home</div>}/>
//                       <Route path='/news'exact render={()=> <div>Ini Halaman News</div>}/>
//                       <Route path='/login'exact render={()=> <div><button>Login</button></div>}/>
//                       <Route path='/profile'exact render={()=>this.state.isAuth? <div>Ini Halaman Home</div>:<Redirect to='login'/>}/>
//               </Switch>
//           </div>
//       </Router>
//     )
//   }
// }
// export default App;
//==============================================================================================================
// // latihan 6.1
// import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch
// } from "react-router-dom";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <ul style={{ listStyle: 'none' }}></ul>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/news'>News</Link></li>
//         </div>

//         <Switch>
//           <Route path='/' exact render={() => <div>Ini halaman Home</div>}></Route>
//           <Route path='/news' render={() => <div>Ini halaman News</div>}></Route>
//         </Switch>
//       </Router>
//     )
//   }
// }


// export default App;
