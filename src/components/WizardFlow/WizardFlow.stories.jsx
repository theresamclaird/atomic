/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import WizardFlow from './WizardFlow';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

export default {
  title: 'Molecules/WizardFlow',
  component: WizardFlow,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function Panel({ children, onNext, onPrevious }) {
  return (
    <Box sx={{ p: 2 }}>
      {children}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: onPrevious ? 'space-between' : 'flex-end',
          gap: 1,
          mt: 2,
        }}
      >
        {onPrevious && (
          <Button type="button" label="Back" onClick={onPrevious} />
        )}
        {onNext && <Button type="button" label="Next" onClick={onNext} />}
      </Box>
    </Box>
  );
}

function StepOne({ goToNext }) {
  const [name, setName] = useState('');

  return (
    <Panel onNext={() => goToNext({ name })}>
      <Text as="h1">Step 1: Name</Text>
      <Box
        as="form"
        sx={{
          border: 'solid 1px #ccc',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContet: 'flex-start',
          gap: 1,
          mt: 2,
          p: 2,
        }}
      >
        <Text as="label" htmlFor="name">
          Enter a name:
        </Text>
        <input
          name="name"
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          ref={input => input && input.focus()}
        />
      </Box>
    </Panel>
  );
}

function StepTwo({ goToNext, goToPrevious }) {
  const [num, setNum] = useState(0);

  return (
    <Panel
      onNext={() => goToNext({ num: Number(num) })}
      onPrevious={() => goToPrevious()}
    >
      <Text as="h1">Step 2: Number</Text>
      <Box
        as="form"
        sx={{
          border: 'solid 1px #ccc',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContet: 'flex-start',
          gap: 1,
          mt: 2,
          p: 2,
        }}
      >
        <Text as="label" htmlFor="name">
          Enter a mumber:
        </Text>
        <input
          name="num"
          type="text"
          id="num"
          value={num}
          onChange={e => setNum(e.target.value)}
          ref={input => input && input.focus()}
        />
      </Box>
    </Panel>
  );
}

function Congratulations({ goToNext, goToPrevious }) {
  return (
    <Panel onNext={() => goToNext()} onPrevious={() => goToPrevious()}>
      <Text as="h1">Congratulations!</Text>
      <Text as="p" sx={{ mt: 2 }}>
        You picked 42, the answer to life, the universe, and everything.
      </Text>
    </Panel>
  );
}

function StepThree({ goToNext, goToPrevious }) {
  const [color, setColor] = useState('');

  return (
    <Panel onNext={() => goToNext({ color })} onPrevious={() => goToPrevious()}>
      <Text as="h1">Step 3: Color</Text>
      <Box
        as="form"
        sx={{
          border: 'solid 1px #ccc',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContet: 'flex-start',
          gap: 1,
          mt: 2,
          p: 2,
        }}
      >
        <Text as="label" htmlFor="name">
          Enter a color:
        </Text>
        <input
          name="color"
          type="text"
          id="color"
          value={color}
          onChange={e => setColor(e.target.value)}
          ref={input => input && input.focus()}
        />
      </Box>
    </Panel>
  );
}

function Completed({ children }) {
  return (
    <Panel>
      <Text as="h1">Completed!</Text>
      <Box sx={{ mt: 2 }}>{children}</Box>
    </Panel>
  );
}

function Template() {
  const [data, setData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = stepData => {
    setData({ ...data, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  const onPrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      <Text as="p" sx={{ m: 1 }}>
        The WizardFlow component makes it easy to step through a series of
        forms.
      </Text>
      <WizardFlow
        currentIndex={currentIndex}
        onNext={onNext}
        onPrevious={onPrevious}
      >
        <StepOne key="step-1" />
        <StepTwo key="step-2" />
        {data.num === 42 && <Congratulations key="congatulations" />}
        <StepThree key="step-3" />
        <Completed>
          <Box>
            <Text as="h2">You chose:</Text>
            <Box as="ul">
              <Text as="li">{`Name: ${data.name}`}</Text>
              <Text as="li">{`Number: ${data.num}`}</Text>
              <Text as="li">{`Color: ${data.color}`}</Text>
            </Box>
          </Box>
        </Completed>
      </WizardFlow>
    </>
  );
}

export const Example = Template.bind({});
Example.args = {};
