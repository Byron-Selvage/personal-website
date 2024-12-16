import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const messages = [
  'Hey!',
  'Thanks for checking out my website',
  'I hope you found something interesting',
  'Since you\'re here, here\'s some more fun facts about me',
  'I spent 16.7% of my time in 2024 listening to music',
  'I can juggle',
  'I might be addicted to Chai',
  'Anyways, feel free to reach out',
  'Thanks',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const TextType = ({ loopMessage }) => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(0); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        if (loopMessage) {
          updateIter(0);
          updateChar(0);
        } else {
          setIsActive(false);
        }
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    },
    isActive ? delay : null,
  );

  return (
    <div
      className="inline-container"
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => idx < messages.length && setIsActive(true)}
    >
      <p>{message} &nbsp;</p>
    </div>
  );
};

TextType.defaultProps = {
  loopMessage: false,
};

TextType.propTypes = {
  loopMessage: PropTypes.bool,
};

export default TextType;
