'use client';
import React from 'react';
import {useParams} from "next/navigation";
import {usePathname, useRouter} from "@/lib/i18n/navigation";

const LanguageSwitcher = ({ items = [], defaultValue = '' }) => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const handleChange = (event) => {
        router.replace({pathname, params},{locale: event.target.value});
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