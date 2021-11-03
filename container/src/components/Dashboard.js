import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/Dashboard';

const Dashboard = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return (
        <div ref={ref} ></div>
    )
};

export default Dashboard;
