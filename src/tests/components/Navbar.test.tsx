import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Navbar from '../../components/Navbar';

describe('should render navbar', () => {
    it('should define navbar correctly', () => {
        const { getByText } = render(
            <Navbar />
        );   
        expect(getByText).toBeDefined()
    });
    it('should render navbar correctly', () => {
        render(
            <Navbar />
        ); 
    });
    it('should match navbar correctly', () => {
        const { baseElement } = render(
            <Navbar />
        ); 
        expect(baseElement).toMatchSnapshot()
    });
    it('should render list button correctly', () => {
        const { getByTitle } = render(
            <Navbar />
        );   
        expect(getByTitle('List Button')).toBeInTheDocument()
    });
    it('should render searchbar input correctly', () => {
        const { getByPlaceholderText } = render(
            <Navbar />
        );   
        expect(getByPlaceholderText('Search…')).toBeInTheDocument()
    });
    it('should render add button correctly', () => {
        const { getByTitle } = render(
            <Navbar />
        );   
        expect(getByTitle('Add Button')).toBeInTheDocument()
    });
    it('should render signout button correctly', () => {
        const { getByTitle } = render(
            <Navbar />
        );   
        expect(getByTitle('Signout Button')).toBeInTheDocument()
    });
});