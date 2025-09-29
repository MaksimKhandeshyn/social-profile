import "./App.css";
import user from "./data/user.json";
import friends from "./data/friendlist.json";
import data from "./data/statistcs.json";
import transaction from "./data/transactions.json";
import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/FriendList/FriendList";
import { Statistics } from "./components/Statistics/Statistics";
import { Transaction } from "./components/Transaction/Transaction";
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
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <Transaction items={transaction}></Transaction>
    </div>
  );
}

export default App;
