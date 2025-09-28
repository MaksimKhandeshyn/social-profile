import { FriendItem } from "./FriendItem";
import friend from "../../data/friendlist.json";

export const FriendList = () => {
  return (
    <ul className="friend-list">
      {friend.map((friends) => {
        return <FriendItem friends={friends}></FriendItem>;
      })}
    </ul>
  );
};
