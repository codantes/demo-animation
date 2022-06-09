import React from 'react';
import './App.css';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';
import Box5 from './components/Box5';

const App = () => {
  return (
	<section>
		<h1>This is demo animation react app</h1>
		<Box1 />
		<Box2 />
		<Box3 />
		<Box4 />
		<Box5 />
	</section>
  )
}

export default App