import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { sendForm } from '@emailjs/browser'
import toast from 'react-hot-toast'
import ContactSection from '../ContactSection'

// Mock external dependencies
vi.mock('@emailjs/browser', () => ({
  sendForm: vi.fn(),
}))

vi.mock('react-hot-toast', () => ({
  default: Object.assign(vi.fn(), {
    success: vi.fn(),
    error: vi.fn(),
  }),
  Toaster: () => null,
}))

// Mock reCAPTCHA — renders a button that calls onChange to simulate verification
vi.mock('react-google-recaptcha', () => ({
  default: React.forwardRef(
    ({ onChange }: { onChange: (token: string | null) => void }, ref: React.Ref<unknown>) => {
      React.useImperativeHandle(ref, () => ({ reset: vi.fn() }))
      return (
        <button type="button" onClick={() => onChange('test-captcha-token')}>
          Verify CAPTCHA
        </button>
      )
    }
  ),
}))

const mockSendForm = vi.mocked(sendForm)
const mockToast = vi.mocked(toast)

describe('ContactSection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all form fields', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('submit button is disabled before CAPTCHA is verified', () => {
    render(<ContactSection />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled()
  })

  it('submit button enables after CAPTCHA is verified', () => {
    render(<ContactSection />)
    fireEvent.click(screen.getByRole('button', { name: /verify captcha/i }))
    expect(screen.getByRole('button', { name: /send message/i })).not.toBeDisabled()
  })

  it('shows an error toast when submitting without CAPTCHA', async () => {
    render(<ContactSection />)
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form')!)
    await waitFor(() => {
      expect(mockToast.error).toHaveBeenCalledWith('Please verify that you are not a robot')
    })
  })

  it('calls sendForm and shows success toast on successful submission', async () => {
    mockSendForm.mockResolvedValueOnce({ status: 200, text: 'OK' })
    render(<ContactSection />)

    fireEvent.click(screen.getByRole('button', { name: /verify captcha/i }))
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jane@example.com' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello!' } })
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form')!)

    await waitFor(() => {
      expect(mockSendForm).toHaveBeenCalledTimes(1)
      expect(mockToast.success).toHaveBeenCalledWith('Message sent successfully!')
    })
  })

  it('shows an error toast when sendForm fails', async () => {
    mockSendForm.mockRejectedValueOnce(new Error('Network error'))
    render(<ContactSection />)

    fireEvent.click(screen.getByRole('button', { name: /verify captcha/i }))
    fireEvent.submit(screen.getByRole('button', { name: /send message/i }).closest('form')!)

    await waitFor(() => {
      expect(mockToast.error).toHaveBeenCalledWith('Failed to send message. Please try again.')
    })
  })
})
