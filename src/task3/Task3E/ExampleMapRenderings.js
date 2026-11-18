import React from 'react';
import './ExampleMapRenderings.css';
function FruitItem({ name }) {
  return <li className="fruit-item">{name}</li>;
}
function ExampleMapRenderings() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const items = [
    { id: 1, name: 'Carrot' },
    { id: 2, name: 'Tomato' },
    { id: 3, name: 'Brinjal' }
  ];
  const todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Try map()', completed: false }
  ];
  return (
    <div className="container">
      <h2 className="section-title">Basic Array of Strings</h2>
      <ul className="list">
        {fruits.map((fruit, index) => <li key={index} className="list-item">{fruit}</li>)}
      </ul>
      <h2 className="section-title">Array of Objects</h2>
      <ul className="list">
        {items.map(item => <li key={item.id} className="list-item">{item.name}</li>)}
      </ul>
      <h2 className="section-title">Child Component Rendering</h2>
      <ul className="list">
        {fruits.map((fruit, index) => <FruitItem key={index} name={fruit} />)}
      </ul>
      <h2 className="section-title">Conditional Rendering</h2>
      <ul className="list">
        {todos.map(todo => <li key={todo.id} className="list-item">{todo.completed ? <s>{todo.text}</s> : todo.text}</li>)}
      </ul>
      <h2 className="section-title">Event Handling</h2>
      <ul className="list">
        {fruits.map((fruit, index) => (
          <li key={index} className="list-item clickable" onClick={() => alert(`Clicked: ${fruit}`)}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
export default ExampleMapRenderings;
