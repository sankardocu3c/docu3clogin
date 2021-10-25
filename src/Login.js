import "./login.css";
import docu3cimg from "./images/docu3cimg.png";
import Input from '@mui/material/Input';
import img1 from "./images/img1.png";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";


function Login() {
	const { instance } = useMsal();
	const [uname,setuname] = useState(null);
	const [passwd,setpasswd] = useState(null);
	function setcredentialpassword(event){
		if(event.nativeEvent.data == null){
			setpasswd(passwd.slice(0, passwd.length - 1));
		}
		else{
			var x = passwd + event.nativeEvent.data
			if(passwd === null){
				setpasswd(event.nativeEvent.data)
			}else{
				setpasswd(x);
			}
		}
	}
	function setcredentialusername(event){
		if(event.nativeEvent.data == null){
			setuname(uname.slice(0, uname.length - 1));
		}
		else{
			var x = uname + event.nativeEvent.data
			if(uname === null){
				setuname(event.nativeEvent.data)
			}else{
				setuname(x);
			}
		}
	}
	function handleLogin(instance) {
		console.log(instance)
		instance.loginRedirect(loginRequest).then(()=>{
			console.log("logged in");
		}).catch(e => {
			console.error(e);
		});
		
	}
	return (
		<div className="login__container">
			<div className="login__left">
				<h1 className="text">Simplify Compliance</h1>
				<img className="login__img1" src={img1} />
			</div>
			<div className="login__right">
				<div className="login__form">
					<img className="login__form__logo" src={docu3cimg} />
					<p className="login__form__text1">
						CLASSIFY&nbsp;|&nbsp;COMPLY&nbsp;|&nbsp;COMPREHEND
					</p>
					<p className="login__form__text2">Sign in to get started</p>
					<p className="login__form__text3">Email ID​</p>
					<Input
						placeholder="krugerd@docu3c.com"
						className="login__form__textfield1"
						value={uname}
						onChange={setcredentialusername}
					/>
					<p className="login__form__text4">Password​</p>
					<Input
						placeholder="***********"
						className="login__form__passwd"
						type="password"
						value={passwd}
						onChange={setcredentialpassword}
					/>
					<br/>
					<Button className="form__signin" size="medium" variant="contained" onClick={() => handleLogin(instance)}>SIGN IN</Button>
					<br/>
					<a href="#" className="form__forgotpassword">Forgot Password?</a>
					<a href="#" className="form__createaccount"> <p className="form__createaccount__text"> Don’t have an account yet?&nbsp;</p>Sign up</a>
				</div>
				<p className="copyrights">Copyright All Rights Reserved © 2020​</p>
			</div>
		</div>
	);
}

export default Login;
