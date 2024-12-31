import Link from 'next/link'
import React from 'react'

type HeaderLink = {
  redirect: string
  name: string
}
type HeaederNoAuthComponentProps = {
  links: HeaderLink[]
}

export const HeaederNoAuthComponent: React.FC<HeaederNoAuthComponentProps> = ({
  links
}) => {
  return (
    <header className={'flex flex-1 z-10'}>
      <nav
        className={
          'flex flex-1 flex-row bg-white border-b-gray-300 border-b-2 h-[10vh] items-center justify-between px-8 '
        }
      >
        <Link href={'/'}>
          <h2 className="font-bold text-xl text-black">Site de Saulo</h2>
        </Link>
        <ul className=" flex flex-row gap-5">
          {links.map((link, i) => (
            <li
              key={link.name + i}
              className="text-xl font-medium text-black relative after:absolute after:content-[''] after:bg-primary after:transition-all after:bottom-0 after:left-0 after:w-[0px] after:h-[2px]  hover:after:w-full hover:cursor-pointer"
            >
              <Link href={link.redirect}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
