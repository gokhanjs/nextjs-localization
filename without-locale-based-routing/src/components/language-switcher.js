'use client';
import React from 'react';
import {setUserLocale} from "@/lib/locale";

const LanguageSwitcher = ({ items = [], defaultValue = '' }) => {
    const handleChange = async (event) => {
        await setUserLocale(event.target.value);
    }
    return (
        <select defaultValue={defaultValue} onChange={handleChange}>
            {items.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );
};

export default LanguageSwitcher;