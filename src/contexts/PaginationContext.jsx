import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';

const PaginationContext = React.createContext();

export function usePagination() {
    return useContext(PaginationContext);
}