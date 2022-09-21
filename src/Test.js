import React from "react";

const Test = () => {
  let num = Math.floor(Math.random() * 20);
  console.log(num)
  if (num < 5) {
    throw new Error("Number is less than 5!");
  }
  return <div>{num}</div>;
};

export default Test;
