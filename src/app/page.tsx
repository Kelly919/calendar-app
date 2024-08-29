// src/app/page.tsx
import React from 'react';
import Calendar from './components/Calendar';

const Home: React.FC = () => {
    return (
        <main>
            <h1>My Calendar App</h1>
            <Calendar />
        </main>
    );
};

export default Home;
