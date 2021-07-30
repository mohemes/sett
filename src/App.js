import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn.js'
import Login from './components/login';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Sessions from './components/Sessions';
import Header1 from './components/Header1';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <SignIn/> */}
        {/* <Login/> */}
        <Header1/>
      </header>

      <BrowserRouter>
            
            <div className='container mx-auto'>
                <div>
                    <Suspense fallback={<div>Loading....</div>}>
                        <Switch>
                            {/* {isAuthenticate && (
                                <Route path='/about' component={About} />
                            )}*/

                            <Route path='/sessions' component={Sessions} /> }
                            <Route path='/login' component={Login} />

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
