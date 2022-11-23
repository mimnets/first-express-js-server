import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData()
    return (
        <div>
            <h1>This is home : {users.length}</h1>
            {
                users.map(us => <li><Link to={`/user/${us.id}`}>{us.name}</Link></li>)
            }
        </div>
    );
};

export default Home;