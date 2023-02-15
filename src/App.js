import logo from './logo.svg';
import './App.css';
import Userlist from './components/Userlist'
import {useEffect,useState} from 'react'


function App() {
  const users = [
       {
        name:'John',
        age:25
       },
        {
        name:'Doe',
        age:20
       },
        {
        name:'Smith',
        age:21
       },
       {
        name:'Smith',
        age:21
       },

    ]
  const [comments,setComment] = useState([])

 useEffect(()=>{

   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data=>setComment(data))
   .catch(err=>err)

 },[])


console.log(comments)
  // const PostList = comments.map((post,index)=>(<Userlist key={post.id} post={post}/>))
  
  return (
    <div className="App">
      {
        comments.map((post,index)=>(<Userlist key={post.id} post={post}/>))
      }
    </div>
  );
}

export default App;
