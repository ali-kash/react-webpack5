import React from 'react'
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import {
	Navbar,
	Homepage,
	Exchanges,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from './components'

import './styles/global.scss'
import './styles/theme.less'

const routes = [
	{ path: '/', name: 'Home', Component: Homepage },
	{ path: '/exchanges', name: 'Exchanges', Component: Exchanges },
	{ path: '/cryptocurrencies', name: 'Home', Component: Cryptocurrencies },
	{ path: '/crypto/:coinId', name: 'Home', Component: CryptoDetails },
	{ path: '/news', name: 'News', Component: News },
]

const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Switch>
							{routes.map(({ path, Component }, i) => (
								<Route key={i} path={path} exact>
									<Component />
								</Route>
							))}
						</Switch>
					</div>
				</Layout>

				<div className='footer'>
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}
					>
						Copyright © 2021
						<Link to='/'>Crypto Inc.</Link> <br />
						All Rights Reserved.
					</Typography.Title>
					<Space>
						<Link to='/'>Home</Link>
						<Link to='/exchanges'>Exchanges</Link>
						<Link to='/news'>News</Link>
					</Space>
				</div>
			</div>
		</div>
	)
}

export default withRouter(App)
