import React from 'react';

const ShowGrids = ({show, children}) => {
    return show ? (children) : (<></>)
};

export default ShowGrids;