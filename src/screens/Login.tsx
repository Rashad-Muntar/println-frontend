import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'
import { useLoginMutation } from '../../generated/graphql';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import Input from '../components/share/Input';
import { currentUser } from '../../redux/reducers/userReducer';
import { LoginSchema } from '../components/share/FormValidations';
import CookieManager from '@react-native-cookies/cookies';

const Login = () => {
    const [login] = useLoginMutation();
    const navigation = useNavigation();
    const dispatch = useDispatch()

    useEffect(() => {
      try {
        CookieManager.get('http://localhost:8080/query')
        .then((cookies) => {
          if(cookies?.token?.value) {
            navigation.navigate("Home")
          }
        });
      } catch (error) {
        console.log(error)
      }
     
    },
     [])
    return  (
<View style={styles.container}>
     <Text style={styles.head}>Login</Text>
     <Formik
     validationSchema={LoginSchema}
     initialValues={{ email: '', password: ''}}
     onSubmit={async(values, {resetForm}) => {
        console.log(values)
      try {
        const response = await login({
          variables: {
            input: {
              email: values.email,
              password: values.password
            },
          },
        });
        const user = {
          id: response.data?.login.user.Id,
          username: response.data?.login.user.username,
          email: response.data?.login.user.email
        }
        resetForm({ values: '' })
        CookieManager.set("http://localhost:8080/query", {
            name: 'token',
            value: response?.data?.login.token,
          })
          dispatch(currentUser(user))
          navigation.navigate("Home")
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