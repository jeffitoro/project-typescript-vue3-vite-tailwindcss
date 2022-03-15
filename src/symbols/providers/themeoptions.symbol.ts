import type { InjectionKey, Ref } from "vue";
import type { UpdateThemeOptions, ThemeOptionType } from "@/types";

export const updateThemeOptionsKey: InjectionKey<UpdateThemeOptions> = Symbol("updateOptionsTheme");
export const showThemeOptionsKey: InjectionKey<Ref<ThemeOptionType>> = Symbol("showOptionsTheme")