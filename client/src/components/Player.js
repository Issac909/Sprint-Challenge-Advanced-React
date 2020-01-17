import React from 'react';

import { CardBody } from 'reactstrap';

const Player = (props) => {
        return (
            <CardBody>
                <h2>{props.name}</h2>
                <h3>{props.country}</h3>
            </CardBody>
        )
}

export default Player;