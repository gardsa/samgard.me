import Image from 'next/image'

const ProfileImage = () => (
	<Image
		src='/images/sam.png' // Route of the image file
		height={144} // Desired size with correct aspect ratio
		width={144} // Desired size with correct aspect ratio
		alt='Your Name'
	/>
)

export default ProfileImage
