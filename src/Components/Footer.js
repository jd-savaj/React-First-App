import React from 'react'

export const Footer = ({title}) => {
	const handleClick = () => {
		window.open("https://reactjs.org/");
	};
	const d = <span style={{color:'#dc3545',fontFamily:'-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif'}}>❤</span>
  	return (
		<footer className="card-footer text-muted">
			<p className='page-center'> 
				{d} My First React App {d} <span onClick={handleClick} style={{color:'#61DAFB',cursor:'pointer'}}>Click Here</span>
			</p>
		</footer>
	)
}
