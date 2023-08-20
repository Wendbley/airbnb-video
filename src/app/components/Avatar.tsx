'use client'
import Image from 'next/image'

const Avatar = () => {
	return (
		<Image
			className='rounded-full'
			src='/images/host.png'
			height='30'
			width='30'
			alt='Avatar'
		/>
	)
}

export default Avatar