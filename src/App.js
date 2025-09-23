import "./App.css";
import user from "./data/user.json";
import friends from "./data/friendlist.json";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";
function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />;
    </div>
  );
}

export default App;
