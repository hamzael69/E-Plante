import logo from '../src/assets/logo.png'
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ShoppingList from "./components/ShoppingList";
import '../src/components/Layout.css'
import { useState } from 'react'



function App() {
	const [cart, updateCart] = useState([])
	return (
			<div className="app-container">
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>E-Plante</h1>
			</Banner>
			<div className='hero-section'>
				<h1>Créez votre jungle urbaine</h1>
				<p>Découvrez notre sélection de plantes d'exception</p>
			</div>
			<div className='lmj-layout-inner'>
				<ShoppingList cart={cart} updateCart={updateCart} />
				<Cart cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App

