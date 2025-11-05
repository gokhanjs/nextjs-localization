'use server';

import {cookies} from 'next/headers';
import {fallbackLocale} from '@/config/app';

const COOKIE_NAME = 'locale'

export async function getUserLocale() {
    return (await cookies()).get(COOKIE_NAME)?.value || fallbackLocale;
}

export async function setUserLocale(locale) {
    (await cookies()).set(COOKIE_NAME, locale);
}