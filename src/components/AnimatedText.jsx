import React, { useState, useEffect } from "react";

const AnimatedText = ({ texts, typingSpeed = 100, pauseDuration = 1300 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0); 
  const [forward, setForward] = useState(true); 
  const [blink, setBlink] = useState(true); 

  useEffect(() => {
    if (index >= texts.length) {
      setIndex(0);
      return;
    }

    if (forward) {
      if (subIndex < texts[index].length) {
        const timeout = setTimeout(() => {
          setSubIndex(subIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setForward(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (subIndex > 0) {
        const timeout = setTimeout(() => {
          setSubIndex(subIndex - 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [subIndex, forward, index, texts, typingSpeed, pauseDuration]);

  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <>
    <span>
      {texts[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
    </>
  );
};

export default AnimatedText;
