import React, { Component } from 'react';
import { connect } from 'react-redux';

// Definindo estados da calculadora
function mapState(state){
	return{
		expr: state.expr
	};
}

// Definindo chamadas de ação da calculadora
var n0 = {type: "n0"},
	n1 = {type: "n1"},
	n2 = {type: "n2"},
	n3 = {type: "n3"},
	n4 = {type: "n4"},
	n5 = {type: "n5"},
	n6 = {type: "n6"},
	n7 = {type: "n7"},
	n8 = {type: "n8"},
	n9 = {type: "n9"},
	sum = {type: "sum"},
	sub = {type: "sub"},
	mul = {type: "mul"},
	div = {type: "div"},
	res = {type: "res"},
	par1 = {type: "par1"},
	par2 = {type: "par2"},
	del = {type: "del"},
	clr = {type: "clr"};

// Conectando chamadas do front às ações do redutor
function mapDispatch(dispatch){
	return{
		num0: () => dispatch(n0),
		num1: () => dispatch(n1),
		num2: () => dispatch(n2),
		num3: () => dispatch(n3),
		num4: () => dispatch(n4),
		num5: () => dispatch(n5),
		num6: () => dispatch(n6),
		num7: () => dispatch(n7),
		num8: () => dispatch(n8),
		num9: () => dispatch(n9),
		sum: () => dispatch(sum),
		sub: () => dispatch(sub),
		mul: () => dispatch(mul),
		div: () => dispatch(div),
		p1: () => dispatch(par1),
		p2: () => dispatch(par2),
		res: () => dispatch(res),
		del: () => dispatch(del),
		clr: () => dispatch(clr),
	}
}

// Definindo componente Calculadora
class Calculator extends Component{
	render(){
		return(
			<div id="calculator">
				<div id="display">
					{this.props.expr.slice(-21)}
				</div><br/>
				<button onClick = {this.props.num1}>1</button>
				<button onClick = {this.props.num2}>2</button>
				<button onClick = {this.props.num3}>3</button>
				<button onClick = {this.props.sum}>+</button><br/>
				<button onClick = {this.props.num4}>4</button>
				<button onClick = {this.props.num5}>5</button>
				<button onClick = {this.props.num6}>6</button>
				<button onClick = {this.props.sub}>-</button><br/>
				<button onClick = {this.props.num7}>7</button>
				<button onClick = {this.props.num8}>8</button>
				<button onClick = {this.props.num9}>9</button>
				<button onClick = {this.props.mul}>*</button><br/>
				<button onClick = {this.props.num0}>0</button>
				<button onClick = {this.props.p1}>(</button>
				<button onClick = {this.props.p2}>)</button>
				<button onClick = {this.props.div}>/</button><br/>
				<button onClick = {this.props.res}>=</button>
				<button charset="utf-8" onClick = {this.props.del}>⏎</button>
				<button style={{
					width: "48.5%",
				}} onClick = {this.props.clr}>Limpar</button>
			</div>
		);
	}
}

// Conectando tudo
var connected = connect(
	mapState,
	mapDispatch,
)(Calculator);

export default connected;