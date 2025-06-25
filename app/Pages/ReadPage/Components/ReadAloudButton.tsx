import React, { useState } from "react";

export default function ReadAloudButton() {
  const [isReading, setIsReading] = useState(false);

  const handleReadAloud = () => {
    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support speech synthesis.");
      return;
    }

    const contentElement = document.getElementById("story-content");
    if (!contentElement) return;

    const text = contentElement.innerText;

    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.onend = () => setIsReading(false);
      window.speechSynthesis.speak(utterance);
      setIsReading(true);
    }
  };

  return (
    <button
      onClick={handleReadAloud} className="text-left"
      
    >
      {isReading ? "Stop Reading" : "Read Aloud"}
    </button>
  );
}
