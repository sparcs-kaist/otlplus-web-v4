import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SearchSection from './index'
import { ThemeProvider } from '@emotion/react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Mock dependencies
vi.mock('@/common/components/search/SearchArea', () => ({
  default: ({ onSearch, placeholder }: any) => (
    <div data-testid="search-area">
      <input
        data-testid="search-input"
        placeholder={placeholder}
        onChange={(e) => onSearch({ keyword: e.target.value })}
      />
    </div>
  ),
}))

// Setup i18n for tests
i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {},
    },
  },
})

// Mock theme
const lightTheme = {
  colors: {
    Highlight: {
      default: '#E54C65',
    },
    Background: {
      Section: {
        default: '#FFFFFF',
      },
    },
  },
}

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={lightTheme as any}>{component}</ThemeProvider>
    </I18nextProvider>
  )
}

describe('SearchSection', () => {
  it('renders correctly', () => {
    renderWithProviders(<SearchSection />)
    expect(screen.getByTestId('search-area')).toBeInTheDocument()
  })

  it('has correct style', () => {
    const { container } = renderWithProviders(<SearchSection />)
    const wrapper = container.firstChild
    expect(wrapper).toHaveStyle('width: 100%')
    expect(wrapper).toHaveStyle('max-width: 645px')
  })
})
