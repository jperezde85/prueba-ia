'use client';

import { useState } from 'react';
export const Tabs = ({ defaultValue, children }) => <div>{children}</div>;
export const TabsList = ({ children }) => <div style={{ display: 'flex', marginBottom: '10px' }}>{children}</div>;
export const TabsTrigger = ({ value, children, onClick }) => <button onClick={onClick} style={{ marginRight: '10px', padding: '5px 10px' }}>{children}</button>;
export const TabsContent = ({ value, children }) => <div>{children}</div>;
