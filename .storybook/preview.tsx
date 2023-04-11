import type { Preview } from '@storybook/react'
import * as NextImage from 'next/image'
import React from 'react'

import 'styles/globals.css'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: NextImage.ImageProps) => (
    <OriginalNextImage {...props} unoptimized />
  )
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
