import {useTranslations} from "next-intl";
import {routing} from "@/config/app";
import LanguageSwitcher from "@/components/language-switcher";
import {use} from "react";

export default function Home({ params }) {
    const {locale} = use(params);

    const supportedLocales = routing.locales.join(", ");

    const t = useTranslations('HomePage');

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
                        items={routing.locales.map(locale => ({
                            label: locale.toUpperCase(),
                            value: locale
                        }))}
                    />
                </li>
                <li>
                    Test: <input type="text" placeholder="input" />
                </li>
            </ul>
        </div>
    );
}
