// src/components/Loader.jsx
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
      <div className="loader" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000ff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .loader {
    font-size: 40px;
    font-family: monospace;
    font-weight: bold;
    text-transform: uppercase;
    color: #0000;
    -webkit-text-stroke: 1px #fff;
    --g: conic-gradient(#fff 0 0) no-repeat text;
    background:
      var(--g) 0,
      var(--g) 1ch,
      var(--g) 2ch,
      var(--g) 3ch,
      var(--g) 4ch,
      var(--g) 5ch,
      var(--g) 6ch;
    animation:
      l20-0 1.5s linear infinite alternate,
      l20-1 3s linear infinite;
  }

  .loader:before {
    content: "Loading";
  }

  @keyframes l20-0 {
    0% {
      background-size: 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0, 1ch 0;
    }
    25% {
      background-size: 1ch 100%, 1ch 50%, 1ch 0, 1ch 0, 1ch 0, 1ch 50%, 1ch 100%;
    }
    50% {
      background-size: 1ch 100%, 1ch 100%, 1ch 50%, 1ch 0, 1ch 50%, 1ch 100%, 1ch 100%;
    }
    75% {
      background-size: 1ch 100%, 1ch 100%, 1ch 100%, 1ch 50%, 1ch 100%, 1ch 100%, 1ch 100%;
    }
    to {
      background-size: 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%, 1ch 100%;
    }
  }

  @keyframes l20-1 {
    0%, 50% {
      background-position-y: 100%;
    }
    50.01%, to {
      background-position-y: 0;
    }
  }
`;

export default Loader;
