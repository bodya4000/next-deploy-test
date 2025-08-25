import React, { useState } from 'react'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { PrimaryBtn } from '@/components/ui/buttons/primary-btn'
import { toast } from 'react-toastify'

interface TgChatModalProps {
  onClose?: () => void
}

export const TgChatModal = ({ onClose }: TgChatModalProps) => {
  const [text, setText] = useState('')

  const sendMessage = async () => {
    if (!text.trim()) {
      alert('Please enter a message')
      return
    }

    try {
      const response = await fetch('/api/send-message-to-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()
      console.log('Message sent:', data)
      toast.success('Message sent successfully!')
      setText('')
      onClose?.()
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again later.')
    }
  }

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.2)]'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex items-center gap-3 mb-4'>
          <ChatBubbleLeftRightIcon className='w-6 h-6 text-blue-600' />
          <h2 className='text-lg font-semibold'>Звʼязатися з підтримкою</h2>
        </div>

        <p className='text-gray-700 mb-6'>Напишіть нам у Telegram, і ми відповімо якнайшвидше.</p>

        <div className='max-w-md mx-auto space-y-4'>
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Ваше повідомлення...'
            className='w-full min-h-[120px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
          />
          <PrimaryBtn onClick={sendMessage} label='Send' className='w-full' />
        </div>
      </div>
    </div>
  )
}
