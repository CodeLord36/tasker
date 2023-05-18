import { NavLink } from "react-router-dom";
import { useState } from "react";
import Input from '../component/forms/input';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [accesstoken, setAccesstoken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (uid !== accesstoken) {
        toast.error("Password does not match");
        return;
      }
      //console.log('registering user', {name, email, uid});
      const {data} = await axios.post('http://localhost:8000/api/register', {
        name,
        email,
        uid,
      });
      if(data.error) {
        toast.error(data.error);
        return;
      } else {
        toast.success("Successfully registered");
        console.log("registration success", data);
        //window.location.href = "/login";
      }
    } catch (err) {
            console.log(err);
    }
  }


    return (
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        //style={{ marginTop: "-100px" }}
        >

        <Toaster />
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1 className="fw-bold mb-3">Register</h1>

              <form>
                <Input
                value={name}
                setValue={setName}
                label="Name"
                type="text" />

                <Input
                value={email}
                setValue={setEmail}
                label="Email"
                type="email" />

                <Input
                value={uid}
                setValue={setUid}
                label="Password"
                type="password" />

                <Input
                value={accesstoken}
                setValue={setAccesstoken}
                label="Confirm Password"
                type="password" />


                <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
                disabled={!name || !email || email < 6 || uid.length < 6}>
                  Submit
                </button>

                <div className="mb-3">
                  <p>
                    Already have an account?{" "}
                    <NavLink to="/login">Login</NavLink>
                  </p>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    );
}