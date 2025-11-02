import React, { useEffect } from "react"
import MLPresentation from "./components/MLPresentation.jsx";

function App() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      const prevButton = document.querySelector('.nav-button:first-of-type');
      const nextButton = document.querySelector('.nav-button:last-of-type');
      
      if (e.key === 'ArrowLeft' && prevButton && !prevButton.disabled) {
        prevButton.click();
      } else if (e.key === 'ArrowRight' && nextButton && !nextButton.disabled) {
        nextButton.click();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return <MLPresentation/>
}

export default App;
