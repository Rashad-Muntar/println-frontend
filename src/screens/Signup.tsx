import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { useSignupMutation } from '../../generated/graphql';
import { useNavigation } from '@react-navigation/native';
import { Formik} from 'formik';
import Input from '../components/share/Input';
import { SignupSchema } from '../components/share/FormValidations';

const Signup = () => {
    const [signup] = useSignupMutation();
    const navigation = useNavigation();
    return  (
<View style={styles.container}>
     <Text style={styles.head}>Sign up</Text>
     <Formik
     validationSchema={SignupSchema}
     initialValues={{ username:'', email: '', password: ''}}
     onSubmit={async(values, {resetForm}) => {
      try {
        await signup({
          variables: {
            input: {
              username: values.username,
              email: values.email,
              password: values.password
            },
          },
        });
        console.log("Sign up was successful")
        resetForm({ values: '' })
      } catch (error:any) {
        console.log(error.message)
      }
     }}
   >
     {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
       <View style={styles.inputWrap}>
          <Text style={styles.label}>
             Enter Username
        </Text>
        <Input
           onChangeText={handleChange('username')}
           onBlur={handleBlur('username')}
           value={values.username}
           placeholder='jondoe'
         />
         {errors.username && <Text style={styles.error}>{errors.username}</Text>}
        <Text style={styles.label}>
             Enter Email
        </Text>
         <Input
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder='jondore@gmail.com'
           keyboardType='email-address'
         />
           {errors.email && <Text style={styles.error}>{errors.email}</Text>}
         <Text style={styles.label}>
             Enter password
        </Text>
        <Input
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           secureTextEntry={true}
           value={values.password}
           placeholder='********'
         />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      <View style={styles.ctaWrap}>
        <Text>Already have an accout? <Text style={styles.login} onPress={() => navigation.navigate("Login")}>Login</Text></Text>
      </View>
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
   </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputWrap:{
        width: '80%'
    },
    head:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    label:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    error: {
      color: 'red',
      marginBottom: 10,
    },
    login:{
      color: 'blue',
    },
    ctaWrap:{
      alignItems: "flex-end"
    }
})

export default Signup