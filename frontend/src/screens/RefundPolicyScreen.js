import React from 'react'
import {Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
const RefundPolicyScreen = () => {
  return (
    <FormContainer>
      <div className="ps-4 pe-4">
        <h1
          className="bg-primary pt-1 mb-3 mt-4 pb-1 ps-3 pe-3 text-white bolder rounded"
          style={{ textAlign: 'center', marginTop: '.7em' }}>
          REFUND POLICY
        </h1>

        <p style={{ fontSize: '1.2em' }}>
          The content transmitted is for persons or entities above 18 years of
          age only. Xcesswin does not refund cash charged for subscription,
          and is not responsible for any lost or acquired capital. Countries
          which are not legally involved in soccer staking should not subscribe
          to our plans. You can read through Our <Link to='/terms-and-condition'>Terms and Conditions</Link>  for more
          information on Xcesswin.
        </p>
      </div>
    </FormContainer>
  )
}

export default RefundPolicyScreen
