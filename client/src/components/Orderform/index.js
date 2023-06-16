import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { QUERY_PRANK } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const OrderForm = () => {
    const { loading, data } = useQuery(QUERY_PRANK);
    const Prank = data?.viewPranks|| [];
    console.log(data);


    // return (
        // <div>
        //     {loading ? 
        //     <div> Order has not yet been fetched! </div>
        //     : <div style={{ margin:'100px 500px'}}>
        //         {Prank.map((Prank) => {
    return (
        <Container style={{ textAlign: 'center'}}>
        <div>
          <form style={{margin: '100px'}} 
        //   onSubmit={handleSubmit}
          >
            <div>
              <label style={{margin: '115px' }} htmlFor="email">Prankee Name</label>
              <input style={{ border: 'solid black', width: '300px' }} 
                type="Prankee Name"
                id="Prankee Name"
                name="Prankee Name"
                // value={formData.email}
                // onChange={handleChange}
              />
            </div>
            <div style={{marginTop: '20px'}}  >
              <label style={{margin: '135px'}} htmlFor="password">Location</label>
              <input style={{ border: 'solid black', width: '300px' }} 
                type="Location"
                id="Location"
                name="Location"
                // value={formData.password}
                // onChange={handleChange}
              />
            </div>
            <div style={{marginTop: '20px'}}  >
              <label style={{margin: '125px'}} htmlFor="password">Date & Time</label>
              <input style={{ border: 'solid black', width: '300px' }} 
                type="Date & Time"
                id="Date & Time"
                name="Date & Time"
                // value={formData.password}
                // onChange={handleChange}
              />
            </div>
            <div>
            <h3 style={{fontSize: '30px', marginTop: '30px' }}>Prank Being Ordered</h3>
            <p>{Prank.title}Prank Title Goes Here</p>
            </div>
            <button style={{marginTop: '30px',  backgroundColor: 'lightBlue', border: 'solid black', borderRadius: '1rem', padding: '10px', marginLeft: '30px'}} type="submit" 
            disabled={loading}
            >
              Submit
            </button>
            {/* {error && <p style={{marginTop: '20px'}}>Error: {error.message}</p>} */}
          </form>
        </div>
        </Container>
      )
//     })}
// </div>
// }
// </div>
// )

};
export default OrderForm;