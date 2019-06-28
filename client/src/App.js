import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Plot from 'react-plotly.js';
import { thisTypeAnnotation } from '@babel/types';

class Sensor1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            s1: [],
            data: [{x: [], y: [], marker: {color: 'red'}}],
            layout: [],
            frames: [],
            config: {}
        };
    }

    componentDidMount() {
        this.IntervalTime = setInterval(() => {
            let newSensorData = [...this.state.data];
            newSensorData[0].x.push(newSensorData[0].x.length + 1);
            newSensorData[0].y.push(Math.floor(Math.random() * 6) + 1);
            const newLayout = Object.assign({title: 'Sensor 1', width: 800, height: 240}, this.state.layout);
            this.setState({
                data: newSensorData, 
                layout: newLayout
            });
            newLayout.datarevision++;
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.IntervalTime);
    }

    render() {
    return (
        <>
            <Plot
                useResizeHandler={true}
                data={this.state.data}
                layout={this.state.layout}
                frames={this.state.frames}
                onInitialized={ (figure) =>this.setState(figure) }
                onUpdate={ (figure) =>  this.setState(figure) } 
            />
        </>
    );
    }
}

class Sensor2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{x: [], y: [], marker: {color: 'green'}}],
            layout: [{title: 'Sensor 2'}],
            frames: [],
            config: {}
        };
    }

    componentDidMount() {
        this.IntervalTime = setInterval(() => {
	    let newSensorData = [...this.state.data];
	    newSensorData[0].x.push(newSensorData[0].x.length + 1);
	    newSensorData[0].y.push(Math.floor(Math.random() * 6) + 1);
	    const newLayout = Object.assign({title: 'Sensor 2', width: 800, height: 240}, this.state.layout);
	    this.setState({
		data: newSensorData, 
		layout: newLayout
	    });
	    newLayout.datarevision++;
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.IntervalTime);
    }

    render() {
        return (
            <>
                <Plot
                    useResizeHandler={true}
                    data={this.state.data}
                    layout={this.state.layout}
                    frames={this.state.frames}
                    onInitialized={ (figure) =>this.setState(figure) }
                    onUpdate={ (figure) =>  this.setState(figure) } 
                />
            </>
        );
    }
}

class Sensor3 extends Component {
    constructor(props) {
	super(props);
	this.state = {
            data: [{x: [], y: []}],
            layout: [{title: 'Sensor 3', marker: {color: 'red'}}],
            frames: [],
            config: {}

	};
    }

    componentDidMount() {
	this.IntervalTime = setInterval(() => {
	    let newSensorData = [...this.state.data];
	    newSensorData[0].x.push(newSensorData[0].x.length + 1);
	    newSensorData[0].y.push(Math.floor(Math.random() * 6) + 1);
	    const newLayout = Object.assign({title: 'Sensor 3', width: 800, height: 240}, this.state.layout);
	    this.setState({
		data: newSensorData, 
		layout: newLayout
	    });
	    newLayout.datarevision++;    
	}, 1000);
    }

    componentWillUnmount() {
	clearInterval(this.IntervalTime);
    }
    
    render() {
	return (
	    <>
		<Plot
                    useResizeHandler={true}
                    data={this.state.data}
                    layout={this.state.layout}
                    frames={this.state.frames}
                    onInitialized={ (figure) => this.setState(figure) }
                    onUpdate={ (figure) => this.setState(figure) } 
                />
            </>
	);
    }
}

class Sensor4 extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    data: [{x: [], y: []}],
            layout: [{title: 'Sensor 4', marker: {color: 'red'}}],
            frames: [],
            config: {}
	};
    }

    componentDidMount() {
	this.IntervalTime = setInterval(() => {
	    let newSensorData = [...this.state.data];
	    newSensorData[0].x.push(newSensorData[0].x.length + 1);
	    newSensorData[0].y.push(Math.floor(Math.random() * 6) + 1);
	    const newLayout = Object.assign({title: 'Sensor 4', width: 800, height: 240}, this.state.layout);
	    this.setState({
		data: newSensorData, 
		layout: newLayout
	    });
	    newLayout.datarevision++;
	}, 1000);
    }

    componentWillUnmount() {
	clearInterval(this.IntervalTime);
    }
    
    render() {
	return(
		<Plot
		  useResizeHandler={true}
		  data={this.state.data}
		  layout={this.state.layout}
		  frames={this.state.frames}
		  onInitialized={ (figure) => this.setState(figure) }
		  onUpdate={ (figure) => this.setState(figure) } 
		  />
	);
    }
}

class Sensor5 extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    data: [{x: [], y: []}],
	    layout: [{title: 'Sensor 5', marker: {color: 'blue'}, width: 800, height: 240}],
	    frames: [],
	    config: {}
	};
    }

    componentDidMount() {
	this.IntervalTime = setInterval((state) => {
	    let newSensorData = [...this.state.data];
	    newSensorData[0].x.push(newSensorData[0].x.length + 1);
	    newSensorData[0].y.push(Math.floor(Math.random() * 6) + 1);
	    const newLayout = Object.assign({title: 'Sensor 5', width: 800, height: 240}, this.state.layout);
	    this.setState({
		data: newSensorData, 
		layout: newLayout
	    });
	    newLayout.datarevision++;
	}, 1000);
    }

    componentWillUnmount() {
	clearInterval(this.IntervalTime);
    }
    
    render() {
	return (
	    <Plot
	      useResizeHandler={true}
	      data={this.state.data}
	      layout={this.state.layout}
	      frames={this.state.frames}
	      onInitialized={ (figure) => this.setState(figure) }
	      onUpdate={ (figure) => this.setState(figure) } />
	);
    }
}

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>Timer Live : {count}</h1>
            </div>
        );
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        }, 1000);
    }

    componentWillUnmount() {

    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: 0,
            time: [],
            s1: [],
            s2: [],
            s3: [],
            s4: [],
            s5: []
        };
    }

    componentDidMount() {
        var intervalAcq = setInterval(this.getData, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalAcq);
    }

    increment() {
        this.setState({ sample: this.state.sample +1 });
    }
    render() {
        return (
            <div>
                <Timer />
                <table>
                    <tr>
                    <td><Sensor1 /></td>
                    </tr>
                    <tr>
                    <td><Sensor2 /></td>
                    </tr>
                    <tr>
                    <td><Sensor3 /></td>
                    </tr>
                    <tr>
                    <td><Sensor4 /></td>
                    </tr>
                    <tr>
                    <td><Sensor5 /></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default App;
