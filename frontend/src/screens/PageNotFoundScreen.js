import React from 'react'
import FormContainer from '../components/FormContainer'
const PageNotFoundScreen = () => {
  return (
    <FormContainer>
      <div className="p-4">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {' '}
          <img
            fluid
            style={{
              height: '350px',
              width: '350px',
            }}
            src="https://i.imgur.com/qIufhof.png"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '10px',
          }}
          id="info">
          <h3
            style={{ color: '#2C3E50', fontSize: '25px', fontWeight: 'bold' }}>
            {' '}
            404 This page could not be found
          </h3>
        </div>
      </div>
    </FormContainer>
  )
}

export default PageNotFoundScreen
