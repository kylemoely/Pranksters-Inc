import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Prankgrid from '../components/Prankgrid/index';
import { QUERY_PRANKS } from '../utils/queries';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Pranks = () => {
  const { loading, data } = useQuery(QUERY_PRANKS);
  const pranks = data?.pranks || [];

  const [UserData, setFormData] = useState({
    user: '',
  });
  const handleChange = (e) => {
    setFormData({ ...UserData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate(); 
  const handleFormSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const { Udata } = ({
        variables: {
          user: UserData.user,
      
        },
      });
    
      setFormData({
        user: '',
      });
      console.log('Order Submited', Udata);

      navigate(`/orders/${UserData.user}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Pick a Prank</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <form style={{ margin: '50px' }}
          onSubmit={handleFormSubmit}
        >
            <div>
            <label style={{ margin: '10px' }} htmlFor="user">Enter User ID to see Order History</label>
            <input
              type="user"
              id="user"
              name="user"
              value={UserData.user}
              onChange={handleChange}
              style={{ border: 'solid black', width: '200px' }}
            />
          </div>
          <Button style={{ marginTop: '20px', backgroundColor: 'lightBlue', border: 'solid black', borderRadius: '1rem', padding: '5px', marginLeft: '300px' }} type="submit"
          >
            Order History
          </Button>
          </form>
        </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Prankgrid pranks={pranks} title="Pick a Prank" />
          )}
          </div>
        </div>
    </main>
  );
};

export default Pranks;
