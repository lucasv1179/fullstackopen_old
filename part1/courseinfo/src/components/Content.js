import React, { Fragment } from 'react';
import Part from './Part';

const Content = ({ course: { parts } }) => (
    <Fragment>
        { parts.map( part => <Part name={part.name} exercises={part.exercises} />) }
    </Fragment>
);

export default Content;
