import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import DrawingBoard from './DrawingBoard';
import MAPS from './maps';
import Toolbar from './Toolbar';
import MapSelector from './MapSelector';

const DEFAULT_SETTINGS = {
  color: 'red',
  size: 5,
};

const Header = styled.header({
  position: 'absolute',
  zIndex: 100,
  backgroundColor: 'white',
  top: 0,
  left: 0,
});

const generateId = () => Math.floor(Math.random() * Math.floor(1000000));

const App = () => {
  const [userId, setUserId] = useState(-1);
  const [map, setMap] = useState(MAPS[0]);
  const [floor, setFloor] = useState(map.floors[0]);
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    setUserId(generateId());
  }, []);

  const onMapChangeHandler = (map) => {
    setMap(map);
    setFloor(map.floors[0]);
  };

  return (
    <div className={'App'}>
      <Header>
        <h1>R6S Palette tactique</h1>
        <Toolbar settings={settings} onSettingsChanged={setSettings} />
        <MapSelector
          map={map}
          onMapChange={onMapChangeHandler}
          floor={floor}
          onFloorChange={setFloor}
        />
      </Header>
      <DrawingBoard userId={userId} floor={floor} settings={settings} />
    </div>
  );
};

export default App;
