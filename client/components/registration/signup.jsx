import React from 'Raect';

export default class Signup extends React.Component{

    render(){
        return(

            <main>
            <div className="sh-login">
                <div className="sh-login__logo"><a href="" className="sh-logo"><img src="fonts/icons/sharehub/svg/logo.svg" alt=""/></a></div>
                <div className="sh-login__content">
                    <p>Sign up with Imagehub</p>
                    <div className="sh-login__form">
                        <form action="#">
                            <input type="text" className="form-control" placeholder='Username' required/>
                            <input type="email" className="form-control" placeholder='Email' required/>
                            <input type="password" className="form-control" placeholder='Password' required/>
                            <input type="password" className="form-control" placeholder='Retype Password' required/>
                            <div className="sh-login__send">
                                <a href="#">Already have an account?</a>
                                <button type="submit" className="sh-btn">Sign up</button>
                            </div>
                            <div className="sh-login__footer">
                                <p>or with Social Network</p>
                                <div className="sh-login__social">
                                    <a href="" className="sh-btn-social__facebook sh-btn-social"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="" className="sh-btn-social__twitter sh-btn-social"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="" className="sh-btn-social__google sh-btn-social"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

        )
    }
}