import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'
import { useLoginMutation } from '../../generated/graphql';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Input from '../components/share/Input';
import { LoginSchema } from '../components/share/FormValidations';

const Login = () => {
    const [login] = useLoginMutation();
    const navigation = useNavigation();
    return  (
<View style={styles.container}>
     <Text style={styles.head}>Login</Text>
     <Formik
     validationSchema={LoginSchema}
     initialValues={{ email: '', password: ''}}
     onSubmit={async(values, {resetForm}) => {
        console.log(values)
      try {
        await login({
          variables: {
            input: {
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
           keyboardType='email-address'
         />
           
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
           <View style={styles.ctaWrap}>
        <Text>You don't have an accout yet? <Text style={styles.login} onPress={() => navigation.navigate("Signup")}>Register</Text></Text>
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

export default Login