import { inject } from "vue";

function injectStrict<T>(key: string, fallback?: T) {
  const resolved = inject(key, fallback)
  if (!resolved) {
    throw new Error(`Could not resolved ${key}`);
  }
  return resolved
}

export { injectStrict }