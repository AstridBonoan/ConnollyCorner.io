import { images } from '../data/siteData'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-10 md:h-12',
  md: 'h-14 md:h-16',
  lg: 'h-24 md:h-32',
}

export default function Logo({ className = '', size = 'sm' }: LogoProps) {
  return (
    <img
      src={images.logo}
      alt="Connolly's Corner — Bar & Restaurant, Maspeth, NY"
      className={`w-auto object-contain ${sizes[size]} ${className}`}
    />
  )
}
