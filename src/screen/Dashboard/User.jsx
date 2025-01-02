
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CustomNavbar from "../../components/Customnavbar/Customnavbar";
import Footer from "../../components/Footer/Footer";
import "./dashboard.css";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const [verify, setVerify] = useState(null);

  // Function to decode JWT token
  const decodeToken = (token) => {
    try {
      const payload = token.split(".")[1]; // Extract the payload part of the JWT
      const decoded = JSON.parse(atob(payload)); // Decode Base64 to a JSON object
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  // Fetch user data when component mounts
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Get the token from localStorage
    if (token) {
      const decoded = decodeToken(token); // Decode the token
      setUserInfo(decoded); // Store the decoded data in state
    }
  }, []);

  // Navigate to verification page
  const handleViewDetails = () => {
    navigate("/verify", { state: { userInfo } }); // Pass the userInfo correctly here
  };



  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/displaydata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        setVerify(data.verify);
      

      } else {
        console.log("Error fetching data:", data.message);
      }
    } catch {
      console.log("Error fetching data:");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <CustomNavbar />
        <div className="dashboard">
          <div className="dashboard-container">
            {userInfo ? (
              <div className="dashboard-content">
                <div className="left-section">
                  <img
                    src={userInfo.img || "default-profile.png"}
                    alt="User Profile"
                    className="profile-image"
                  />
                </div>
                <div className="middle-section">
                  <h1 className="user-name">{userInfo.name}</h1>
                  <p className="user-email">{userInfo.email}</p>
                  <p className="user-verification">
                    <span>Verification:</span>
                    <span className="verification-number">
                      {userInfo.verified ? "Verified" : "Not Verified"}
                    </span>
                  </p>
                </div>
                <div className="right-section">
                  <div className="role-badge">{userInfo.role}</div>
                  <div className="revenue-section">
                    <h3>Revenue</h3>
                    <p className="revenue-amount">${userInfo.revenue}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="login-message">
                <h1>Please log in to access your dashboard</h1>
              </div>
            )}
            {userInfo && (
              <div className="action-buttons">
                <Link to="/userhistory">
                  <button className="btn btn-primary">
                    Transaction History
                  </button>
                </Link>
                <button
                  className="btn btn-secondary"
                  onClick={handleViewDetails} // Fixed the onClick to call handleViewDetails directly
                >
                  Verify Account
                </button>
                <Link to="">
                  <button className="btn btn-support">Support</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
