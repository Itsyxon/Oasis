import Image from 'next/image'
import cabin from '@/assets/cabin.webp'
import fishing from '@/assets/fishing.jpg'
import gazebo from '@/assets/gazebo.jpg'
import pool from '@/assets/pool.jpg'
import type { Service } from '@/lib/site'

const images = { cabin, fishing, gazebo, pool }

interface Props {
  service: Service
  sizes: string
  className?: string
}

export default function ServiceImage({ service, sizes, className }: Props) {
  return <Image src={images[service.image]} alt={service.alt} sizes={sizes} placeholder="blur" className={className} />
}
