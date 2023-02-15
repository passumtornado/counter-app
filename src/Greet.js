import React,{useState} from 'react'
import Button from './components/Button'

function Greet(props) {
	const [message,setMessage] = useState('Welcome')
    

    function handleMessage(){
    	setMessage('Thank you')
    }
	return (
		<div>
		  <h1>{message}</h1>
		  <Button onHandle={()=>handleMessage()} />
		</div>
	)
}

export default Greet