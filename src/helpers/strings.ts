import { Typos } from '@/contexts/GlobalStatesProvider'

type Fonts = {
  [key in Typos]: string
}

const removeSpaces = (str: string) => {
  return str.replaceAll(' ', '-')
}

const getFontFamily = (choice: Typos) => {
  const fonts: Fonts = {
    'typo-a': 'Kumbh Sans',
    'typo-b': 'Roboto Slab',
    'typo-c': 'Space Mono',
  }

  return `${fonts[choice]}, sans-serif`
}

export { removeSpaces, getFontFamily }
