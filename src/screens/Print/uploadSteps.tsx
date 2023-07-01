import React,{useEffect, useState} from 'react'
import { View, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useCreateJobMutation } from '../../../generated/graphql';
import Bar from '../../components/share/Bar'
import DocumentPicker from 'react-native-document-picker';
import GetFileSize from '../../utils/GetFileSize';

// import WordReader from './WordReader';
import PDFReader from './PdfReader';


const UploadSteps = () => {
    const [login] = useCreateJobMutation();
    const [fileUri, setFileUri] = useState("");


    const pickFile = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
          });
    
          setFileUri(res.uri);
          GetFileSize(fileUri)
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            console.log('User canceled the picker');
          } else {
            console.log('Error while picking the file', err);
          }
        }
    }


  return (
    <View style={styles.iconArea}>
    <Bar
      isIcon={true}
      icon={require('../../assets/images/upload.png')}
      backgroundColor="white"
      marginBottom={20}
      title="Upload document"
      arrow={<AntDesign name="plus" size={20} />}
      onPress={() => pickFile()}
    />
    <Bar
      isIcon={true}
      icon={require('../../assets/images/calculate.png')}
      title="Calulate price"
      backgroundColor="white"
      arrow={<AntDesign name="up" size={20} />}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    iconArea: {
        height: '20%',
        justifyContent: 'center',
        marginVertical: 20,
      },
})

export default UploadSteps