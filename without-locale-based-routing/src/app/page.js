import {useLocale, useTranslations} from "next-intl";
import {locales} from "@/config/app";
import LanguageSwitcher from "@/components/language-switcher";
import {setUserLocale} from "@/lib/locale";

export default function Home({ params }) {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const supportedLocales = locales.join(", ");

    return (
        <div>
            <ul>
                <li>Translated Word: <b>{t("title")}</b></li>
                <li>Current Language: <b>{locale}</b></li>
                <li>Supported Languages: <b>{supportedLocales}</b></li>
                <li>
                    Set Language To:
                    <LanguageSwitcher
                        defaultValue={locale}
                        items={locales.map(locale => ({
                            label: locale.toUpperCase(),
                            value: locale
                        }))}
                    />
                </li>
            </ul>
        </div>
    );
}
