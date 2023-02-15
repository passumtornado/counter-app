import React from 'react'

class Welcome extends React.Component {
    constructor(props) {
    	super(props)
    
    	this.state = {
    		message:"L2_5 cohort" 
    	}
    }
      changeMessage(){
      	this.setState({
      		message:"Thank you for subscribing!!"
      	})
      }
	render() {
		return (
			<div>
				<h1>Welcome {this.state.message}</h1>
				<button onClick={()=>this.changeMessage()}>Subscribe</button>
			</div>
		)
	}
}

export default Welcome
