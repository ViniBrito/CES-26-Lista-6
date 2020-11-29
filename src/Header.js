import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

// Definindo componente Cabeçalho
export default function Header(){
  return (
     <div>
  	   <h2>Bem-vindo(a) à Calculadora Web</h2>
       Feita por Vinícius Brito Bastos Antunes (COMP-22)<br/><br/>
     </div>
  );
}