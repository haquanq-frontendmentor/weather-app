import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";

const LOCAL_SAVED_THEME_KEY = "user-pref-theme";
const DATA_THEME_KEY = "data-theme";

const THEMES = { LIGHT: "light", DARK: "dark" } as const;

type Themes = (typeof THEMES)[keyof typeof THEMES];

const useThemeStore = defineStore("theme", () => {
    const theme = ref<Themes | null>(null);

    const saveTheme = (value: Themes) => {
        document.documentElement.setAttribute(DATA_THEME_KEY, value);
        localStorage.setItem(LOCAL_SAVED_THEME_KEY, value);
    };

    const cycleThemes = () => {
        theme.value = theme.value === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    };

    watch(theme, (currentTheme) => {
        if (currentTheme) saveTheme(currentTheme);
    });

    onMounted(() => {
        let currentTheme = String(localStorage.getItem(LOCAL_SAVED_THEME_KEY)) as Themes;
        const devicePreferedDarkTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
        if (!Object.values(THEMES).includes(currentTheme as Themes)) {
            currentTheme = devicePreferedDarkTheme ? THEMES.DARK : THEMES.LIGHT;
        }
        theme.value = currentTheme;
    });

    return { theme, cycleThemes };
});

export { THEMES, useThemeStore, type Themes };
