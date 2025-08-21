import React from 'react'
import { PageContainer, SpaceContainer } from '../ui/containers'
import { HeaderSearch } from './header-search'

export default function Header() {
  return (
    <header>
      <PageContainer className='flex items-center py-4'>
        <HeaderSearch />
        <h1
          className='flex-1 block 
							py-4 px-2
							text-3xl text-center font-bold '
        >
          Demo Application
        </h1>
        <SpaceContainer />
      </PageContainer>
    </header>
  )
}
