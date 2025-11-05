import "@/assets/styles/globals.css";
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/config/app";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(props) {
    const {locale} = await props.params;

    const t = await getTranslations({
        locale: locale,
        namespace: 'HomePage'
    });

    return {
        title: t('title')
    };
}

export default async function RootLayout({ children, params }) {
    const {locale} = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <html lang={locale}>
            <body className="antialiased">
                <NextIntlClientProvider>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
