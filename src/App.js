import React from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'

import { Navbar, Homepage } from './components'

import './styles/global.scss'

const routes = [{ path: '/', name: 'Home', Component: Homepage }]

const App = () => {
	return (
		<div className='app'>
			<Navbar />

			<div className='container'>
				<div className='main'>
					<Switch>
						{routes.map(({ path, Component }, i) => (
							<Route key={i} path={path} exact>
								<Component />
							</Route>
						))}
					</Switch>
				</div>

				{/* <div className='footer'>
					<span>footer area</span>
				</div> */}
			</div>
		</div>
	)
}

export default App
