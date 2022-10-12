import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          placeholder="ex. muffins"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;
  display: flex;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 0.8rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    /* @media only screen and (min-width: 600px) {
      width: 100rem;
    } */
  }
  svg {
    position: absolute;
    align-items: center;
    color: white;
    transform: translate(100%, -50%);
    top: 50%;
    left: 0%;
  }
`;

export default Search;
