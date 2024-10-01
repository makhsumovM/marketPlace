import React, { useState } from "react";
import styled from "styled-components";

const Radio1 = () => {
  const [selectedValue, setSelectedValue] = useState("3"); // По умолчанию выбрано значение 3

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledWrapper>
      <div className="rating">
        <input value="5" name="rate" id="star5" type="radio" checked={selectedValue === "5"} onChange={handleChange} />
        <label title="text" htmlFor="star5" />
        <input value="4" name="rate" id="star4" type="radio" checked={selectedValue === "4"} onChange={handleChange} />
        <label title="text" htmlFor="star4" />
        <input value="3" name="rate" id="star3" type="radio" checked={selectedValue === "3"} onChange={handleChange} />
        <label title="text" htmlFor="star3" />
        <input value="2" name="rate" id="star2" type="radio" checked={selectedValue === "2"} onChange={handleChange} />
        <label title="text" htmlFor="star2" />
        <input value="1" name="rate" id="star1" type="radio" checked={selectedValue === "1"} onChange={handleChange} />
        <label title="text" htmlFor="star1" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rating:not(:checked) > input {
    position: absolute;
    appearance: none;
  }

  .rating:not(:checked) > label {
    float: right;
    cursor: pointer;
    font-size: 30px;
    color: #666;
  }

  .rating:not(:checked) > label:before {
    content: '★';
  }

  .rating > input:checked + label:hover,
  .rating > input:checked + label:hover ~ label,
  .rating > input:checked ~ label:hover,
  .rating > input:checked ~ label:hover ~ label,
  .rating > label:hover ~ input:checked ~ label {
    color: #e58e09;
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
    color: #ff9e0b;
  }

  .rating > input:checked ~ label {
    color: #ffa723;
  }
`;

export default Radio1;
