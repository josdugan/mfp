import { mount } from 'marketing/Marketing';
import React, { useRef, useEffect } from 'react';

const Marketing = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    });

    return (
        <div ref={ref} />
    );
};

export default Marketing;
