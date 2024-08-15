import {Button as ButtonNativeBase, IButtonProps, Text} from 'native-base'

type Props = IButtonProps & {
  title: string;
  variant?: "outline" | "solid";
  fillColor?: string
}

export default function Button ({title, variant = "solid", fillColor = "red.500", ...rest}:Props) {
  return (
    <ButtonNativeBase 
      bg={variant === "outline" ? "transparent" : fillColor}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="gray.500"
      rounded="sm" 
      _pressed={{ bg:  fillColor === "red.500" && variant !== "outline" ? "red.500" : "white"} } 
      {...rest}>
      <Text color={variant === "outline" ? "gray.500" : "white"}  fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  )
}