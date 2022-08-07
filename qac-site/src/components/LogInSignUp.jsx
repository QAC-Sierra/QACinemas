import React from "react";

const LogInSignUp = () => {

    const submitForm = (event) => {
        event.preventDefault();
        alert("form submitted");
    }

    return (
        <div>
            <div>
                <h3>Login to QA Cinema</h3>
            </div>
            <form onSubmit={submitForm}>
                <div>
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}
export default LogInSignUp;