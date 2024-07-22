import {Button as ButtonNativeBase, IButtonProps, Text} from 'native-base'

type Props = IButtonProps & {
  title: string;
  variant?: "outline" | "solid";
}

export default function Button ({title, variant = "solid", ...rest}:Props) {
  return (
    <ButtonNativeBase 
      w="full" 
      bg={variant === "outline" ? "transparent" : "green.600"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      rounded="sm" 
      _pressed={{ bg:  variant === "outline" ? "gray.600" : "green.700"} } 
      {...rest}>
      <Text color={variant === "outline" ? "green.500" : "white"}  fontFamily="heading" fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  )
}