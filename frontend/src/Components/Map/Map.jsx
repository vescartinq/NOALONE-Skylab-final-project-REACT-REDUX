/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

// 41.636077760895915, 2.362037440802656 (Escola Milenari)
// 41.60826049795665, 2.2872998604405472 (ajuntament granollers)
// 41.599842293714985, 2.2914629744953348 (ajuntament granollers)
// 41.39867113104639, 2.199980997782548 (Skylab)

function Map(challenge) {
  return (
    <>
      <GoogleMap
        defaultZoom={17}
        defaultCenter={
        { lat: 41.39867113104639, lng: 2.199980997782548 }
        }
      />
    </>
  );
}

export default withScriptjs(withGoogleMap(Map));
