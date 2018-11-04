import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

// Material UI
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 60px;
`;

const Bar = styled.div`
  flex: 1;
  background: #f5f5f5;
  margin: 10px 6px 10px;
  border-radius: 4px;
  overflow: hidden;

  & div {
    height: 25px;
    background: #ff4d4f;
  }
`;

function Progress() {
  const [value, setValue] = useState(0);
  const [animatedBarStyle] = useSpring({
    width: `${value}%`,
    from: {
      width: `${0}%`,
    },
  });
  return (
    <Wrapper>
      <Button variant="fab" color="secondary" onClick={() => setValue(0)}>
        {'<'}
      </Button>
      <Bar>
        <animated.div style={animatedBarStyle} />
      </Bar>
      <Button variant="fab" color="secondary" onClick={() => setValue(100)}>
        {'>'}
      </Button>
    </Wrapper>
  );
}

export default Progress;
