import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './SignIn/index.js';
import SignUp from './SignUp/index.js';
class Cq extends React.Component {
	render() {
		return (
			<>
               <div className="App">
      <div>
    <Link  to='/signin'><h2>SignIn</h2></Link>
      <Link to='/signup'><h2>SignUp</h2></Link>
      </div>
      <Switch>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                </Switch>

    </div>
            </>
		)
	}
}

ReactDOM.render(
<BrowserRouter>
	<Cq />,
    </BrowserRouter>,
	document.getElementById('root')
);