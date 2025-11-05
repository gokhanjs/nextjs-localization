import {createNavigation} from 'next-intl/navigation';
import {routing} from '@/config/app';

export const {Link, getPathname, redirect, usePathname, useRouter} =
    createNavigation(routing);