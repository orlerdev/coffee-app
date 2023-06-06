import Image from "next/image"

export default function Avatar({ src }) {
	return (
		<div>
			<Image
				src={src}
				alt="user profile pic"
				fill
				style={{ objectFit: "cover", objectPosition: "top" }}
			/>
		</div>
	)
}
