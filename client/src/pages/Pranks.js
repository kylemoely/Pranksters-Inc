import React from 'react';
import { useQuery } from '@apollo/client';

import Prankgrid from '../components/Prankgrid/index';

import {QUERY_PRANKS} from '../utils/queries';

const Pranks = () => {
  const { loading, data } = useQuery(QUERY_PRANKS);
  const pranks = data?.pranks || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div>
        <h1 style={{marginLeft: '600px', fontSize: '50px' }}>Pick a Prank</h1>
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Prankgrid 
              pranks={pranks}
              title="Pick a Prank"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Pranks;