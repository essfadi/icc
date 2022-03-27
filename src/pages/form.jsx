import styled, { createGlobalStyle, css } from "styled-components";
import { useState } from "react";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-image: url("https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg");
    background-size: cover;
    margin: 0;
    height: 100;
  }
`;
const sharedStyles = css`
  background-color: white;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`;
const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles};
`;
const StyledButton = styled.button`
  display: block;
  color: white;
  height: 40px;
  font-size: 0.9rem;
  background-color: #0a66c2;
  padding: 0 20px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  border: 0;
`;

const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;
const StyledError = styled.div`
  color: #ff000088;
`;
const init = {
  gender: "",
  age: "",
  height: "",
  weight: "",
};
export const Form = () => {
  const [error, seterror] = useState("");
  const [state, setstate] = useState(init);
  const [calories, setcalories] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    for (let key in state) {
      if (state[key] === "") {
        seterror(`You must provide the ${key}`);
        return;
      }
    }
    seterror("");

    if (state.gender === "male")
      setcalories(13 * state.weight + 5 * state.height - 6 * state.age);
    else setcalories(450 + 9 * state.weight + 3 * state.height - 4 * state.age);
    console.log(calories);
  };

  const handleChange = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setstate((prev) => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h1> Calories/Day Calculator</h1>
          <StyledFieldSet>
            <legend>Gender:</legend>
            <label>
              {" "}
              <input
                type="radio"
                value="male"
                name="gender"
                checked={state.gender === "male"}
                onChange={handleChange}
              />{" "}
              Male
            </label>
            <label>
              {" "}
              <input
                type="radio"
                value="female"
                name="gender"
                checked={state.gender === "female"}
                onChange={handleChange}
              />{" "}
              Female
            </label>
          </StyledFieldSet>
          <label htmlFor="age">Age:</label>
          <StyledInput
            type="text"
            name="age"
            pattern="[0-9]*"
            placeholder="Example: 20"
            value={state.age}
            onChange={handleChange}
          />
          <label htmlFor="height">Height:</label>
          <StyledInput
            type="text"
            name="height"
            pattern="[0-9]*"
            placeholder="in cms"
            value={state.height}
            onChange={handleChange}
          />
          <label htmlFor="weight">Weight:</label>
          <StyledInput
            type="text"
            name="weight"
            pattern="[0-9]*"
            placeholder="in kg"
            value={state.weight}
            onChange={handleChange}
          />
          <StyledButton type="submit">Calculate</StyledButton>
          {error && <StyledError>{error}</StyledError>}
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};
