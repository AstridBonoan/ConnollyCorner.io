import { images } from '../data/siteData'

interface LogoProps {
  className?: string
  size?: 'nav' | 'sm' | 'md' | 'lg'
}

const sizes = {
  nav: 'h-16 sm:h-[4.5rem] md:h-20 lg:h-[5.5rem]',
  sm: 'h-10 md:h-12',
  md: 'h-14 md:h-16',
  lg: 'h-24 md:h-32',
}

export default function Logo({ className = '', size = 'sm' }: LogoProps) {
  return (
    <img
      src={images.logo}
      alt="Connolly's Corner — Bar & Restaurant, Maspeth, NY"
      className={`w-auto max-w-[min(280px,55vw)] object-contain ${sizes[size]} ${className}`}
    />
  )
}
