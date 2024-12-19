import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import { Portal } from '@ark-ui/react/portal'
import { Select, createListCollection } from '@ark-ui/react/select'
import { Theme } from '@/types/theme'
import MonitorIcon from '~icons/carbon/screen'
import SunIcon from '~icons/carbon/sun'
import MoonIcon from '~icons/carbon/moon'
import ChevronDownIcon from '~icons/carbon/chevron-down'

const themeOptions: { value: Theme; label: string; icon: React.FC }[] = [
  {
    value: 'light',
    label: 'Light',
    icon: () => <SunIcon className='w-5 h-5' />,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: () => <MoonIcon className='w-5 h-5' />,
  },
  {
    value: 'system',
    label: 'System',
    icon: () => <MonitorIcon className='w-5 h-5' />,
  },
]

export const ThemeSelector = () => {
  const collection = createListCollection({
    items: themeOptions,
  })

  const { theme, setTheme } = useTheme()

  const currentTheme = themeOptions.find((option) => option.value === theme)

  return (
    <Select.Root
      onValueChange={(e) => {
        setTheme(e.value[0] as Theme)
      }}
      collection={collection}
      className='text-cyber-text-light dark:text-cyber-text-dark'
      defaultValue={[theme]}
    >
      <Select.Label className='sr-only'>Theme</Select.Label>

      <Select.Control className=''>
        <Select.Trigger className='flex gap-2 items-center group p-2 border border-cyber-accent rounded-md'>
          {currentTheme && <currentTheme.icon />}

          <Select.ValueText />

          <Select.Indicator>
            <ChevronDownIcon className='group-data-[state=open]:rotate-180 transition-transform' />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content className='bg-cyber-background-light dark:bg-cyber-background-dark border-cyber-accent border rounded-md'>
            <Select.ItemGroup>
              {collection.items.map((item) => (
                <Select.Item
                  key={item.value}
                  item={item}
                  className='flex gap-2 items-center justify-between p-2 data-[highlighted]:bg-cyber-accent/20 transition-all text-cyber-text-light dark:text-cyber-text-dark'
                >
                  <Select.ItemText className='flex gap-2 items-center'>
                    {<item.icon />}
                    {item.label}
                  </Select.ItemText>

                  <Select.ItemIndicator>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  )
}
