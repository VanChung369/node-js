import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
const info = {
  fullName: "",
  name: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatar: "",
};
const cookies = new Cookies();
const Auth = () => {
  const [signup, setSignup] = useState(true);
  const [form, setForm] = useState(info);
  const handleChange = (e) => {
    e.preventDefault();
    // set cac thong tin vao truong form trong usestate
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const Submit = async (e) => {
    e.preventDefault();
    const { name, password, phoneNumber, avatar } = form;
    const URL = "http://localhost:8000";
    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${signup ? "signup " : "login"}`, {
      name,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatar,
    });
    cookies.set("token", token);
    cookies.set("name", name);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (signup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatar", avatar);
      cookies.set("hashedPassword", hashedPassword);
    }
    // reload lai truong chinh
    window.location.reload();
  };
  const switchmode = () => {
    setSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <div className="layout">
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-12 col-md-5 col-lg-4 py-8 py-md-11">
            <h1 className="font-bold text-center">
              {signup ? "Sign Up" : "sign In"}
            </h1>
            <p className="text-center mb-6">Welcome Chat Web .</p>
            <form className="mb-6" onSubmit={Submit}>
              {signup && (
                <div className="form-group">
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your FullName"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your Name"
                  onChange={handleChange}
                  required
                />
              </div>
              {signup && (
                <div className="form-group">
                  <label htmlFor="phoneNumber" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control form-control-lg"
                    placeholder="Enter your Phone"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              {signup && (
                <div className="form-group">
                  <label htmlFor="avatar" className="sr-only">
                    Avatar
                  </label>
                  <input
                    name="avatar"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Avatar"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                />
              </div>
              {signup && (
                <div className="form-group">
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              {/* <div className="form-group d-flex justify-content-between">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"   checked= 'checked' name="checkbox-remember"/>
                        <label className="custom-control-label" htmlFor="checkbox-remember">Remember me</label>
                        </div>
                    <a href="#">Reset password</a>
            </div> */}
              <button
                className="btn btn-lg btn-block btn-primary"
                type="submit"
              >
                {signup ? "Sign Up" : "Sign In"}
              </button>
            </form>
            <p className="text-center">
              {signup ? "Already have an account?" : "Don't have an account?"}
              <span style={{ color: "#0176ff" }} onClick={switchmode}>
                {signup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
