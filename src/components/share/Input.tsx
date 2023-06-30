import { ChangeEvent, useState } from "react";
import { KeyboardTypeOptions } from "react-native";
import { TextInput, StyleSheet, View, Button} from "react-native";

interface Props {
  onChangeText: (name: string) => (e: string | ChangeEvent<any>) => void;
  onBlur: (name: string) => (e: string | ChangeEvent<any>) => void;
  placeholder?: string;
  secureTextEntry?:boolean
  value: string;
  keyboardType?: KeyboardTypeOptions;
}
const Input = ({ onChangeText, value, placeholder, keyboardType, onBlur, secureTextEntry }: Props) => {
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    
  };

  return (
    <View style={styles.container}>
   <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      secureTextEntry={isPasswordVisible ? false : secureTextEntry}
      keyboardType={keyboardType}
    />
      {
        secureTextEntry && 
        <View>
          <Button 
        onPress={togglePasswordVisibility}
        title={isPasswordVisible ? 'Hide' : 'Show'}
      />
      </View>
      }
     
    </View>
 

  );
};

const styles = StyleSheet.create({
    container: {

        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginBottom: 13,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    input:{
      width: "80%"
    },
});

export default Input;