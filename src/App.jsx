import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Header from "./Header";
import Envelope from "./Envelope";
import Footer from "./Footer";
import Popup from "./Popup";
import { recipients } from "./data";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:recipientId" element={<Card />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return <div>Welcome to the Valentine Card Project!</div>;
};

const Card = () => {
  const { recipientId } = useParams();
  const recipient = recipients.find((r) => r.id === recipientId);

  if (!recipient) {
    return <div>Recipient not found</div>;
  }

  const [showPopup, setShowPopup] = React.useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="App">
      <Header />
      {!showPopup && <Envelope onClick={handleClick} />}
      {showPopup && (
        <Popup imageUrl={recipient.imageUrl} message={recipient.message} />
      )}
      <Footer />
    </div>
  );
};

export default App;
