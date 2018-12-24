import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './season';
import Spinner from './Spinner'
class App extends Component {
    state = {lat:null, errorMessage : '', time: new Date().toLocaleTimeString()}

   
    
    componentDidMount(){
        setInterval( ()=>this.setState({
            time: new Date().toLocaleTimeString()
        }),1000)


        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        )

    }
   
renderContent(){

    if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat = {this.state.lat} />
    }
    return <Spinner/>;
}

    render() {
        return(
            <div>
            <div className = "time" style = {{textAlign:'center'}} ><h1 >{this.state.time}</h1></div>
            {this.renderContent()}
            
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))