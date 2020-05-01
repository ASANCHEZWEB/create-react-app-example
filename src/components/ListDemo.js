// components/ListDemo.js
import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6];

// array of list item HTML elements that needs to be displayed
// components/ListDemo.js

export const listItems = numbers.map((oneNumber, index) => 
  <li key={index}>{oneNumber}</li>
);