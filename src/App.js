import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';
import Footer from './components/Footer';

import './App.css'

class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			title: 'Mohamed Harmanani',
			navLinks: [
				{title: 'Home', path: '/'},
				{title: 'About', path: '/about'},
				{title: 'Contact', path: '/contact'},
			],
			home: {
				title: 'Mohamed Harmanani',
				subtitle: 'Data Scientist / Software Engineer',
			},
			about: {
				title: 'About me'
			}, 
			contact: {
				title: 'Connect with me'
			}
		}
	}

	render () {
		return (
			<div className='App-container'>
				<Router basename={process.env.PUBLIC_URL}>
					<Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />} />					
					<Route path="/uoft-genet" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />} />
					<Route path="/venngage" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subtitle} text={this.state.home.text} />} />
				</Router>
				
				<Footer />
			</div>
		);
	}
}

export default App;
