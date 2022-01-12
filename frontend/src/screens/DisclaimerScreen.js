import React from 'react'
import { Link } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
const DisclaimerScreen = () => {
  return (
    <FormContainer>
      <div className="ps-4 pe-4">
        <h1
          className="bg-primary pt-1 mb-3 mt-4 pb-1 ps-3 pe-3 text-white bolder rounded"
          style={{ textAlign: 'center', marginTop: '.7em' }}>
          DISCLAIMER
        </h1>

        <p style={{ fontSize: '1.2em' }}>
          Ritepredict.com is not a bookmaker, betting and does not collect bets.
          Our predictions, our techniques, guides, help, and recommendations as
          we try to make them as accurate as possible are subject to errors.
          Predictions must be considered as recommendations and not incitement
          to bet, even Ritepredict remember that gambling should be considered
          as entertainment. The visitor and Ritepredict user are solely
          responsible for his actions and his decisions and in no event shall
          the site and its employees can be held responsible for the information
          included.
        </p>
        <p style={{ fontSize: '1.2em' }}>
          Ritepredict not be liable for any loss of money or anything else that
          may result from the use of the information on Ritepredict. Also please
          note that some countries may be in place some restrictions on sports
          betting and is the sole responsibility of the user/visitor to see and
          learn about these regulations. We reserve the right to discretion,
          without prior notice, to do changes and corrections to this site.
          Finally, the images, except where otherwise indicated, are taken
          directly from the web, if some images were inserted by mistake
          violating the copyright. please contact the administrator for
          immediate removal.
        </p>
        <p style={{ fontSize: '1.2em' }}>
          By opting to receive soccer predictions and tips, you accept that all
          Ritepredict predictions and tips are for informational purposes only
          and that Ritepredict will take no responsibility for any losses
          incurred by you the subscriber, as a direct result of acting upon
          received Ritepredict information. We do not encourage gambling in any
          sort of form. Users under 18 years old must seek parental consent.
        </p>
        <p style={{ fontSize: '1.2em' }}></p>
      </div>
    </FormContainer>
  )
}

export default DisclaimerScreen
