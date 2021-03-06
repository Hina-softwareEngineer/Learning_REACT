import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import  SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth, createUserProfileDocument,addCollectionAndDocuments} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.components';

import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends React.Component {

  
    unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser}= this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log('hello', snapShot.id, snapShot.data());
        setCurrentUser({
          id : snapShot.id, 
          ...snapShot.data()
        });
        console.log(this.state);
        });          
      }
      else{
        setCurrentUser(userAuth);
      
      }

      
    } )
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div className="App">
      <Header  />
      <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route path='/shop' component={ ShopPage } />
      <Route exact path='/checkout' component={ CheckoutPage } />
      <Route exact path='/signin' render={()=> this.props.currentUser ? 
      (<Redirect to='/' />): (<SignInAndSignOutPage />)}  />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,


})

const mapDispatchToProps= dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


/* 

React performance, 

lazy, suspense, 

Error Boundries

Memo , pureComponent

use Memo

use Callback

Profiler

<Profiler id="dir" on Render={(id, phasem acturalDuration) => {
  console.log(id, phase, actualDuration);
}}>

<Profiler/>

*/


/* 

npm install compression
in Node js
const compression=require("compression");
app.use(compression());

npm list react
*/