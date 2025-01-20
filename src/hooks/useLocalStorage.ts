import { useEffect, useState } from 'react'
import type { JsonValue } from 'type-fest'

export function useLocalStorageState<T extends JsonValue>(
  key: string,
  initialValue: T,
) {
  const initial = () =>
    (JSON.parse(localStorage.getItem(key) ?? 'null') ?? initialValue) as T

  const [value, setValue] = useState(initial())

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue] as const
}
