import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn.js'
import Login from './components/login';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Sessions from './components/Sessions';
import Header1 from './components/Header1';
import { Login2 } from './components/Login2';
import SidePanel from './components/SidePanel';
import Setting from './components/Setting';
import Users from './components/Users';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <SignIn/> */}
        {/* <Login/> */}
      </header>

      <BrowserRouter>
        <Header1/>
            
            <div className='container mx-auto'>
                <SidePanel/>
                <div class="maincls">
                    <Suspense fallback={<div>Loading....</div>}>
                        <Switch>
                            {/* {isAuthenticate && (
                                <Route path='/about' component={About} />
                            )}*/

                            <Route path='/users' component={()=>  <Users authorized={false}/>} /> }
                            <Route path='/setting' component={()=>  <Setting authorized={false}/>} /> }
                            <Route path='/sessions' component={()=>  <Sessions authorized={false}/>} /> }
                            <Route path='/login' component={Login2} />

                            {/* <Redirect from='/' to='/posts' exact />
                            <Route path='*' component={NotFound} /> */}
                        </Switch>
                    </Suspense>
                </div>
                
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
