import { useState } from "react";
import styled from 'styled-components';

// custom hook
export const useTheme = () => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = ()=>{
    return setTheme( theme === 'light' ? 'dark' : 'light')
  }
	return {theme, toggleTheme}
}

const StyledButton = styled.button`
background-color:${props => props.bg === 'blue'? 'blue':'green'};
font-size:22px;
color:white;
&:hover,
&:focus{
color:black;
};
`
const App = () => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div
			style={{
				height: '100vh',
				transition: '0.3s ease-in',
				backgroundColor: theme === 'light' ? 'white' : 'black',
			}}
		>
			<StyledButton type="button" bg="green" onClick={toggleTheme}>Toggle Theme {theme}</StyledButton>
      <SignUpForm/>

		</div>
	)
}


const SignUpForm = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const validateEmail = (email) => {
    return String(email).match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
  }
	const handleSubmit = (e) => {
    console.log('e',e)
		e.preventDefault()
		console.log('Form submitted successfully')
	}

	return (
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
          value={firstname}
          onChange={(e)=>setFirstName(()=>e.target.value)}
					placeholder="First Name"
				/>
				{!firstname && <p data-testid="first-name-error-id" className="error">"First name cannot be empty"</p>}
				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
          value={lastname}
          onChange={(e)=>setLastName(()=>e.target.value)}
					placeholder="Last Name"
				/>
				{!lastname && <p data-testid="last-name-error-id" className="error">"Last name cannot be empty"</p>}
				<input
					data-testid="email-id"
					type="email"
					name="email"
          value={email}
          onChange={(e)=>setEmail(()=>e.target.value)}
					placeholder="Email Address"
				/>
				{!validateEmail(email) && <p data-testid="email-error-id" className="error">"Invalid email address"</p>}
				<input
					data-testid="password-id"
					type="password"
					name="password"
					placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(()=>e.target.value)}
				/>
				{password?.length<=7 &&<p data-testid="password-error-id" className="error">"Password must be greater than 7 characters"</p>}
				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
          value={password2}
          onChange={(e)=>setPassword2(()=>e.target.value)}
				/>
				{((!password || !password2) || (password2 !== password && password2.length !== password.length) )&& <p
					data-testid="confirm-password-error-id"
					className="error"
				>"Passwords do not match"</p>}
				<StyledButton type="submit" bg="blue">Sign Up</StyledButton>
			</form>
	)
}


export default App;