import '@testing-library/jest-dom'

// Silence console.error in tests (e.g. React prop warnings from mocked components)
vi.spyOn(console, 'error').mockImplementation(() => {})

// Stub browser APIs not available in jsdom
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
})
