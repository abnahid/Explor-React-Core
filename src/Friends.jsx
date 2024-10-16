import { useEffect, useState } from "react";
import Friend from "./Friend";
import "./Friends.css";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://fake-json-api.mock.beeceptor.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="box">
      <h3>Friend: {friends.length} </h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
