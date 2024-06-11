import "./App.css";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Image from "./components/Image";

const firstName = "Achour";

function App() {
  return (
    <div className="App">
      <div className="product-card">
        <Image />
        <div className="product-details">
          <Name />
          <Price />
          <Description />
        </div>
      </div>
      <p className="greeting">Hello, {firstName ? firstName : "there!"}</p>
      {firstName && ( //si firtName existe
        <img
          className="greeting-image" //image avatar
          src="https://www.popsci.com/wp-content/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
          alt="avatar"
        />
      )}
    </div>
  );
}

export default App;
