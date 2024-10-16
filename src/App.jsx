import "./App.css";
import Centare from "./centare";
import Friends from "./Friends";
import Text from "./Text";
import Users from "./Users";

function App() {
  return (
    <div>
      <Users></Users>
      <Centare></Centare>
      <Text></Text>
      <centare></centare>
      <h3>Ami NAhid</h3>
      <button onClick={handelClick}>Click Me</button>

      <Friends></Friends>
    </div>
  );

  function handelClick() {
    alert("Click Oice");
  }
}

export default App;
