import React from 'react'

function Userlist({post}) {
	return (
		<div className="">
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	)
}

export default Userlist