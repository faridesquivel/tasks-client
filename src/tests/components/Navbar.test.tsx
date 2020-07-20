import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Navbar from '../../components/Navbar';

test('should render navbar correctly', () => {
    const { getByText } = render(
        <Navbar />
    );    
    expect(getByText).toBeDefined()
});