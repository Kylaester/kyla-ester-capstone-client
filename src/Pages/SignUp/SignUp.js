import Nav from "../../Components/Nav/Nav.js";
import back from "../../Assets/angle-left.svg";
import "./SignUp.scss";
import { useNavigate } from "react-router";
import { createUser } from "../../firebase-auth.js";
import { auth } from "../../firebase-init.js";
import { Link } from "react-router-dom";

function SignUp() {
  let Navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const age = event.target.age.value;

    const emailRules = /\S+@\S+\.\S+/;
    if (!emailRules.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!username || !password || !age) {
      alert("Please fill out the required fields. ");
      return;
    }
    try {
      await createUser(username, email, password);
      alert(`Welcome ${username}! !`);
      Navigate("/Home", { state: { userEmail: auth.currentUser.email } });
    } catch (error) {
      alert("Sign up Failed, please try again");
    }
  };
  return (
    <>
      <section className="background">
        <Nav />
        <section className="login">
          {" "}
          <Link className="signup__back" to={"/LogIn"}>
            <img className="signup__back-img" src={back} />
          </Link>
          <form onSubmit={handleSubmit} className="login-container">
            <h1 className="login__title">CodeCraft</h1>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="login__email"
              placeholder="Email..."
            />
            <input
              type="text"
              name="username"
              id="username"
              required
              className="login__username-signup"
              placeholder="Username..."
            />
            <input
              type="password"
              name="password"
              id="password"
              required
              className="login__password-signup"
              placeholder="Password..."
            />
            <input
              type="number"
              min="3"
              max="100"
              name="age"
              id="age"
              required
              className="login__age"
              placeholder="Age..."
            />
            <button className="login__button-signup">Sign Up</button>
          </form>
        </section>
      </section>
    </>
  );
}

export default SignUp;
