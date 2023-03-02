import "./SignUp.css"
import { FiX } from "react-icons/fi"
import { auth } from "../../firebase/config"
import { useState } from "react"
import { useHistory } from "react-router-dom"

const SignUp = ({isSignUpActive, setisSignUpActive, callback}) => {
    const { history } = useHistory()
    const [singInBtn, setSignInBtn] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState(true)
    const [userEmail, setUserEmail] = useState("")
    const [usetPassword, setuserPassword] = useState("")
    const [userSignIn, setUserSignIn] = useState("")
    const [userPasswordSignIn, setSserPasswordSignIn] = useState("")
    const [possobleError, setPossibleError] = useState("")

    const createUser = (evt) => {
        evt.preventDefault()
        auth.signInWithEmailAndPassword(userEmail, usetPassword)
            .then(response => {
                if (response) {
                    history.push("/")
                }
            })
            .catch(err => {
                setPossibleError(err.message)
            })
    }

    const signUpUser = (evt) => {
        evt.preventDefault()
        auth.createUserWithEmailAndPassword(userSignIn, userPasswordSignIn)
            .then(response => {
                if (response) {
                    history.push("/login")
                }
            })
            .catch(error => {
                setPossibleError(error.message)
            })
    }

    return (
        <div className={isSignUpActive === true ? "signup signupactive" : "signup"}>
            <div className="signUpWrapper">
                <div className="signup__top">
                    {
                        possobleError && <p style={{color: "red", marginBottom: "20px"}}>{possobleError}</p> 
                    }
                    <div className="signup__list">
                        <h1 className="signup__heading">Tizimga kirish yoki profil yaratish</h1>
                        <FiX className="SignUp__icon" onClick={() => {setisSignUpActive(false)}}/>
                    </div>
                    <div className="signup__item">
                        <div className="logIn__text" style={singInBtn ? {backgroundColor: "#fff"} : {backgroundColor: "transparent"}}onClick={() => {
                           setSignInBtn(true)
                           setPhoneNumber(true) 
                        }}>Kirish</div>
                        <div className="logIn__text" style={singInBtn ? {backgroundColor: "#fff"} : {backgroundColor: "transparent"}} onClick={() => {
                            setSignInBtn(false)
                            setPhoneNumber(false)
                        }}>Ro'yxatdan o'tish</div>
                    </div>
                    <div className="login__enter" style={phoneNumber ? {display: "block"} : {display: "none"}}>
                        <form className="form__login" onSubmit={createUser}>
                            <div className="login__labelBox">
                                <label className="login__label" htmlFor="login">Log In</label>
                                <input className="login__input" type="email" required placeholder="Enter Email" onChange={(evt) => {setUserEmail(evt.target.value)}}/>
                            </div>
                            <div className="login__labelBox">
                                <label className="login__label" htmlFor="password">Password</label>
                                <input className="login__password" type="password" required placeholder="Enter Password" onChange={(evt) => {setuserPassword(evt.target.value)}}/>
                            </div>
                            <button className="login__btn">Login orqali kirish</button>
                        </form>
                    </div>
                    <div className="login__signup" style={!phoneNumber ? {display: "block"} : {display: "none"}}>
                        <form className="signup__form" onSubmit={signUpUser}>
                            <div className="login__labelBox">
                               <label className="login__label" htmlFor="login">Log In</label>
                               <input className="login__input" type="text" required placeholder="Enter Email" onChange={(evt) => {setUserSignIn(evt.target.value)}}/>
                            </div>
                            <div className="login__labelBox">
                                <label className="login__label" htmlFor="login">Password</label>
                                <input className="login__password" type="password" required placeholder="Enter Password" onChange={(evt) => {setSserPasswordSignIn(evt.target.value)}}/>
                            </div>
                            <button className="login__btn">Ro'yxatdan o'tish</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp