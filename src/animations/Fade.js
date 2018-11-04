import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Text = styled.p`
  text-align: center;
`;

function Fade() {
  const [fade, setFade] = useState(false);
  const [fadeStyle] = useSpring({
    opacity: fade ? 0 : 1,
    color: 'black',
    from: {
      opacity: 0,
      color: 'transparent',
    },
  });
  function onHandleSetFade() {
    setFade(!fade);
  }
  return (
    <Wrapper>
      <Button onClick={onHandleSetFade} variant="contained" color="secondary">
        {fade ? 'Show' : 'Hide'}
      </Button>
      <animated.div style={fadeStyle}>
        <Text>Life is a mystery</Text>
      </animated.div>
    </Wrapper>
  );
}

export default Fade;
