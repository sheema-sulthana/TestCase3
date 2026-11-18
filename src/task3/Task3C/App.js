import React from "react";

function Student1(props) {
  return (
    <div style={boxStyle}>
      <h2>Way 1: Basic Props</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
function Student2({ name, age }) {
  return (
    <div style={boxStyle}>
      <h2>Way 2: Props Destructuring</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
function Student3({ details }) {
  return (
    <div style={boxStyle}>
      <h2>Way 3: Object as Prop</h2>
      <p>Name: {details.name}</p>
      <p>Age: {details.age}</p>
    </div>
  );
}
function Student4({ name, greet }) {
  return (
    <div style={boxStyle}>
      <h2>Way 4: Function as Prop</h2>
      <p>Name: {name}</p>
      <button onClick={greet}>Click to Greet</button>
    </div>
  );
}
function Student5({ name, age }) {
  return (
    <div style={boxStyle}>
      <h3>Student Info</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
function Course({ course, duration }) {
  return (
    <div style={boxStyle}>
      <h3>Course Info</h3>
      <p>Course: {course}</p>
      <p>Duration: {duration}</p>
    </div>
  );
}
function App() {
  const studentData = { name: "Mounika", age: 21 };
  const sayHello = () => { alert("Hello from Parent Component!"); };
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>React Props - All Ways in One Program</h1>
      <Student1 name="Anjali" age={21} />
      <Student2 name="Bhuvana" age={23} />
      <Student3 details={studentData} />
      <Student4 name="Chaitrika" greet={sayHello} />
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Student5 name="Dhamini" age={26} />
        <Course course="React Development" duration="3 Months" />
      </div>
    </div>
  );
}
const boxStyle = {
  border: "2px solid #ccc",
  padding: "10px",
  margin: "10px",
  borderRadius: "8px",
  width: "250px",
  display: "inline-block",
  verticalAlign: "top",
};
export default App;
