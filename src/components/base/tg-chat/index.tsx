'use client'

import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { TgChatModal } from './modal'

export function TgChat() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='
			absolute bottom-4 right-4
			flex items-center 
			gap-2 p-2 rounded-2xl
			bg-blue-600 text-white
			hover:scale-105 transition-transform
			active:opacity-80'
      >
        <ChatBubbleLeftRightIcon className='h-6 w-6' />
      </button>
      {showModal && <TgChatModal onClose={() => setShowModal(false)} />}
    </>
  )
}
