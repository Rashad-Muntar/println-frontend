import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'
import { useLoginMutation } from '../../generated/graphql';
import { Formik } from 'formik';
import Input from '../components/share/Input';
import { SignupSchema } from '../components/share/FormValidations';

const Login = () => {
    const [login] = useLoginMutation();

    return  (
<View style={styles.container}>
     <Text style={styles.head}>Sign up</Text>
     <Formik
     validationSchema={SignupSchema}
     initialValues={{ username:'', email: '', password: ''}}
     onSubmit={async(values, {resetForm}) => {
      try {
        await login({
          variables: {
            input: {
              username: values.username,
              email: values.email,
              password: values.password
            },
          },
        });
        console.log("Login was successful")
        resetForm({ values: '' })
      } catch (error:any) {
        console.log(error.message)
      }
     }}
   >
     {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
       <View style={styles.inputWrap}>
        <Text style={styles.label}>
             Enter Email
        </Text>
         <Input
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder='jondore@gmail.com'
         />
           
         <Text style={styles.label}>
             Enter password
        </Text>
        <Input
           onChangeText={handleChange('password')}
           onBlur={handleBlur('email')}
           secureTextEntry={true}
           value={values.password}
           placeholder='********'
         />
    
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
})

export default Login