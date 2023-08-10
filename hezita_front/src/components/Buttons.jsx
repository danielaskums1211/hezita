import React,{ useState } from 'react';
import Axios from 'axios';


const Buttons = () => {

      const [darkMode, setDarkMode]=useState(false);

      const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark-mode'); // Toggle the class on the body
      };
      
      const handleOffPDClick = async () => {

        try {
          // Make an API call to your backend to execute the OffPD script
          const response = await Axios.post('http://localhost:3000/execute', { script: 'scheduleOffPd.ps1' });
    
          // Handle the response from the backend (if needed)
          console.log('Response:', response.data);
          alert('תבלה כפרה, עובד')
        } catch (error) {
          console.error('Error executing OffPD script:', error);
          alert('וואלה משהו לא עובד אבא')
        }
      };
    
      const handleOnPDClick = async () => {
        try {
          // Make an API call to your backend to execute the OffPD script
          const response = await Axios.post('http://localhost:3000/execute', { script: 'scheduleOnPd.ps1' });
    
          // Handle the response from the backend (if needed)
          console.log('Response:', response.data);
          alert('תבלה כפרה, עובד')
        } catch (error) {
          console.error('Error executing OffPD script:', error);
          alert('וואלה משהו לא עובד אבא')
        }
      };
    
      const handleOnTSClick = async () => {
        try {
          // Make an API call to your backend to execute the OffPD script
          const response = await Axios.post('http://localhost:3000/execute', { script: 'scheduleOnTs.ps1' });
    
          // Handle the response from the backend (if needed)
          console.log('Response:', response.data);
          alert('תבלה כפרה, עובד')
        } catch (error) {
          console.error('Error executing OffPD script:', error);
          alert('וואלה משהו לא עובד אבא')
        }
      };
    
      const handleOffTSClick = async () => {
        try {
          // Make an API call to your backend to execute the OffPD script
          const response = await Axios.post('http://localhost:3000/execute', { script: 'scheduleOffTs.ps1' });
    
          // Handle the response from the backend (if needed)
          console.log('Response:', response.data);
          alert('תבלה כפרה, עובד')
        } catch (error) {
          console.error('Error executing OffPD script:', error);
        }
      };
      
  return (
    <div id="app" className={`${darkMode ? 'dark-mode' : ''}`}>
            <div class="wrapper">
            <input type="checkbox" id="hide-checkbox" checked={darkMode} onChange={toggleDarkMode}/>
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
          </div >
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
                  <button className="onButton" onClick={handleOnPDClick}>
                    send OnPD
                  </button>
                </td>
                <td>
                  <button className="onButton" onClick={handleOnTSClick}>
                    send OnTS
                  </button>
                </td>
                <td>
                    <div className="flex-container">
                    <h1>להחזיר את המערכות כרגיל</h1>
                    <img src='/dayIcon.png' alt='Day Icon' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="offButton" onClick={handleOffPDClick}>
                    send OffPD
                  </button>
                </td>
                <td>
                  <button className="offButton" onClick={handleOffTSClick}>
                    send OffTS
                  </button>
                </td>
                <td>
                    <div className="flex-container">
                    <h1>להחריג את המערכות</h1>
                    <img src='/nightIcon.png' alt='Night Icon' />
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
