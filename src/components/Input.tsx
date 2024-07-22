import { Input as NativeBaseInput, IInputProps} from 'native-base';

export default function Input({...rest}: IInputProps) {
  return (
    <NativeBaseInput 
      bg="gray.200"
      px={4}
      borderWidth={0}
      fontSize="md"
      color="black"
      fontFamily="body"
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.200",
        cursorColor: "black"
      }}
      {...rest}
    />
  )
}