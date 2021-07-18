import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { login } from "../features/userSlice";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: formData.firstName,
        });

        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: formData.firstName,
          })
        );

        db.collection("users")
          .doc()
          .collection("account")
          .doc(userAuth.user.uid)
          .set({
            uid: userAuth.user.uid,
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });

        history.push("/account");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Link to="/">
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </HeaderLeft>

        <HeaderRightIcon>
          <LanguageIcon />
          <h5>en-US</h5>
        </HeaderRightIcon>
      </Header>
      <FormSection>
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <label>First Name</label>
            <input
              type="text"
              {...register("firstName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <p> {errors.firstName && "First Name is required"}</p>
          </>
          <>
            <label>Last Name</label>
            <input
              type="text"
              {...register("lastName", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <p> {errors.lastName && "Last Name is required"}</p>
          </>
          <>
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              {...register("email", {
                required: true,
              })}
            />
            <p> {errors.email && "Email is required"}</p>
          </>
          <>
            <label>Password</label>
            <input
              name="password"
              type="password"
              {...register("password", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <p> {errors.password && "Password is required"}</p>
          </>
          <button type="submit">CREATE ACCOUNT</button>
        </form>
        <Devider>
          <hr /> <span>OR</span> <hr />
        </Devider>
        <Link to="/login">
          <SignUpButton>LOGIN</SignUpButton>
        </Link>
      </FormSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  align-items: center;
  justify-content: space-between;
  padding: 20px 13px 0 20px;
  padding-top: 8px;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  margin-right: 15px;

  img {
    object-fit: contain;
    width: 90px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const HeaderRightIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 7px;
  transition: all 0.2s;

  .MuiSvgIcon-root {
    padding-right: 5px;
  }

  &:hover {
    background-color: #f5f5f5;
    border-radius: 20px;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 330px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  padding-bottom: 50px;

  h1 {
    margin-left: -10px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: #3e6ae1;
      border: 1px solid #f4f4f4;
      padding: 12px 20px;
      border-radius: 50px;
      color: white;
      font-weight: 500;
      outline: none;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: #3457b1;
      }
    }
  }

  label {
    color: #5c5e62;
    font-weight: 500;
    padding-left: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  input {
    margin-bottom: 5px;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    padding: 12px 20px;
    border-radius: 50px;
    color: #393c41;
    font-weight: 500;
    outline: none;

    &:focus {
      border: 1px solid #d6d6d6;
      transition: all 0.2s;
    }
  }

  p {
    color: #b74134;
    margin-left: 15px;
  }
`;

const Devider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  hr {
    width: 40%;
    height: 0;
    opacity: 0.3;
  }

  span {
    font-weight: 500;
    color: #5c5e62;
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  /* margin-top: 20px; */
  /* margin-bottom: 30px; */
  background-color: transparent;
  border: 3px solid black;
  padding: 12px 20px;
  border-radius: 50px;
  color: black;
  font-weight: 500;
  outline: none;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
    font-weight: 500;
  }
`;

export default SignUp;
