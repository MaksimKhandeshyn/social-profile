import "../components/Friends.css";
export const FriendItem = ({ friends: { isOnline, avatar, name } }) => {
  return (
    <li className="item">
      <span className={`status ${isOnline ? "online" : "offline"}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
