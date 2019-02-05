import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

import {
  Button, Card, CardBody
} from 'reactstrap';

const MainCard = () => (
  <Fragment>
    <Card>
      <FontAwesomeIcon icon={faQuoteLeft} className="w-25 mt-2 d-flex justify-content-start align-self-start" />
      <CardBody>
        <Button color="success" className="font-weight-bold mb-3 float-right align-self-end">Get New Quote</Button>
      </CardBody>
      <FontAwesomeIcon icon={faQuoteRight} className="w-25 mb-2 d-flex justify-content-end align-self-end" />
    </Card>
    
  </Fragment>
);

export default MainCard;