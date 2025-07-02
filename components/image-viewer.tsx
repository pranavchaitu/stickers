import { Image } from "react-native";

export default function({ imageUrl } : {
  imageUrl : string
}) {
    return (
        <Image 
            src={imageUrl}
            className="rounded-md"
            width={320}
            height={440}
        />
    )
}