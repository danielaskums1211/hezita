import Axios from "axios";
import React, { useState } from "react";

const Buttons = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode"); // Toggle the class on the body
  };

  const handleOffPDClick = async () => {
    try {
      setIsLoading(true);

      // Make an API call to your backend to execute the OffPD script
      const response = await Axios.post(
        `${window.CONFIG.REACT_APP_HEZITA_SERVER_ENDPOINT}/execute`,
        { script: "scheduleOffPd.ps1" }
      );

      // Handle the response from the backend (if needed)
      console.log("Response:", response.data);
      alert("תבלה כפרה, עובד");
    } catch (error) {
      console.error("Error executing OffPD script:", error);
      alert("וואלה משהו לא עובד אבא");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnPDClick = async () => {
    try {
      setIsLoading(true);

      // Make an API call to your backend to execute the OffPD script
      const response = await Axios.post(
        `${window.CONFIG.REACT_APP_HEZITA_SERVER_ENDPOINT}/execute`,
        { script: "scheduleOnPd.ps1" }
      );

      // Handle the response from the backend (if needed)
      console.log("Response:", response.data);
      alert("תבלה כפרה, עובד");
    } catch (error) {
      console.error("Error executing OffPD script:", error);
      alert("וואלה משהו לא עובד אבא");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnTSClick = async () => {
    try {
      setIsLoading(true);

      // Make an API call to your backend to execute the OffPD script
      const response = await Axios.post(
        `${window.CONFIG.REACT_APP_HEZITA_SERVER_ENDPOINT}/execute`,
        { script: "scheduleOnTs.ps1" }
      );

      // Handle the response from the backend (if needed)
      console.log("Response:", response.data);
      alert("תבלה כפרה, עובד");
    } catch (error) {
      console.error("Error executing OffPD script:", error);
      alert("וואלה משהו לא עובד אבא");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOffTSClick = async () => {
    try {
      setIsLoading(true);

      // Make an API call to your backend to execute the OffPD script
      const response = await Axios.post(
        `${window.CONFIG.REACT_APP_HEZITA_SERVER_ENDPOINT}/execute`,
        { script: "scheduleOffTs.ps1" }
      );

      // Handle the response from the backend (if needed)
      console.log("Response:", response.data);
      alert("תבלה כפרה, עובד");
    } catch (error) {
      console.error("Error executing OffPD script:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="app" className={`${darkMode ? "dark-mode" : ""}`}>
      <div class="wrapper">
        <input
          type="checkbox"
          id="hide-checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label for="hide-checkbox" class="toggle">
          <span class="toggle-button">
            <span class="crater crater-1"></span>
            <span class="crater crater-2"></span>
            <span class="crater crater-3"></span>
            <span class="crater crater-4"></span>
            <span class="crater crater-5"></span>
            <span class="crater crater-6"></span>
            <span class="crater crater-7"></span>
          </span>
          <span class="star star-1"></span>
          <span class="star star-2"></span>
          <span class="star star-3"></span>
          <span class="star star-4"></span>
          <span class="star star-5"></span>
          <span class="star star-6"></span>
          <span class="star star-7"></span>
          <span class="star star-8"></span>
        </label>
      </div>
      {isLoading && (
        <div className="loading">
          <img
            src="https://gifdb.com/images/high/grandma-2d-sketch-floss-dance-0xcvpe8bfhqzbzff.gif"
            style={{ width: "400px", height: "400px" }}
            alt="loading..."
          />
        </div>
      )}
      <h1 className="intro">?שלום, מה תרצה לעשות</h1>
      <table>
        <thead>
          <tr>
            <td>
              <h1>: (pd) מעבדות ואינטרנט</h1>
            </td>
            <td>
              <h1>: (ts) מעבדות של אורק</h1>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <button
                className="onButton"
                disabled={isLoading}
                onClick={handleOnPDClick}
              >
                send OnPD
              </button>
            </td>
            <td>
              <button
                className="onButton"
                disabled={isLoading}
                onClick={handleOnTSClick}
              >
                send OnTS
              </button>
            </td>
            <td>
              <div className="flex-container">
                <h1>להחזיר את המערכות כרגיל</h1>
                <img src="/dayIcon.png" alt="Day Icon" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="offButton"
                disabled={isLoading}
                onClick={handleOffPDClick}
              >
                send OffPD
              </button>
            </td>
            <td>
              <button
                className="offButton"
                disabled={isLoading}
                onClick={handleOffTSClick}
              >
                send OffTS
              </button>
            </td>
            <td>
              <div className="flex-container">
                <h1>להחריג את המערכות</h1>
                <img src="/nightIcon.png" alt="Night Icon" />
              </div>
            </td>
          </tr>
        </thead>
      </table>
      <p className="copyright">Made with ❤️ by &copy; Daniela Skums</p>
    </div>
  );
};

export default Buttons;
