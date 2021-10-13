import React, { useState, useEffect } from 'react'

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true)
	const [screenSize, setScreenSize] = useState(undefined)

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)

		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (screenSize <= 800) {
			setActiveMenu(false)
		} else {
			setActiveMenu(true)
		}
	}, [screenSize])

	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<span>logo here</span>
			</div>
			{activeMenu && <span>Active Menu</span>}
		</div>
	)
}

export default Navbar
