'use client';

export const Button = ({ children, onClick }) => <button onClick={onClick} style={{ padding: '10px', backgroundColor: '#2563eb', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>{children}</button>;
