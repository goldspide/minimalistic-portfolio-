import React from 'react'
import { Section } from './Section'
import { Button, buttonVariants } from '@/components/ui/button'
import GithubIcon from './icons/GithubIcon'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import LinkedinIcon from './icons/LinkedinIcon'
import TwitterIcon from './icons/TwitterIcon'

const Header = () => {
  return (
   <header className='sticky top-0 py-4'>
    <Section className='flex items-baseline'>
        <h1 className='text-xl font-bold text-primary'>raoul.com</h1>
        <div className='flex-1' />
            <ul className='flex items-center gap-2'>
                <Link
                href="https://github.com"
                className = {cn(buttonVariants({variant:"outline"}), 'size-6 p-0')}
                >
                    <GithubIcon size={16} className='text-foreground'></GithubIcon>
                </Link>

                <Link
                href="https://github.com"
                className = {cn(buttonVariants({variant:"outline"}), 'size-6 p-0')}
                >
                    <TwitterIcon size={16} className='text-foreground'></TwitterIcon>
                </Link>

                <Link
                href="https://github.com"
                className = {cn(buttonVariants({variant:"outline"}), 'size-6 p-0')}
                >
                    <LinkedinIcon size={16} className='text-foreground'></LinkedinIcon>
                </Link>
            </ul>
     
    </Section>
   </header>
  )
}

export default Header