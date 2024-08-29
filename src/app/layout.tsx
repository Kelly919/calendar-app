// src/app/layout.tsx
import React from 'react';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1>My Calendar Application</h1>
                </header>
                {children}
                
            </body>
        </html>
    );
};

export default Layout;
