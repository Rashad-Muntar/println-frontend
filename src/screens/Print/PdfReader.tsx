import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const PDFReader = () => {
    const [fileUri, setFileUri] = useState(null);
    const pickFile = async () => {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
          });
    
          setFileUri(res.uri);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            console.log('User canceled the picker');
          } else {
            console.log('Error while picking the file', err);
          }
        }
    }
    return (
        <View>
            <Button title="Choose File" onPress={pickFile} />
            <Text>{fileUri}</Text>
        </View>
    )
//   const [textContent, setTextContent] = useState('');

//   const [fileUri, setFileUri] = useState(null);

//   const pickFile = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });

//       setFileUri(res.uri);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User canceled the picker');
//       } else {
//         console.log('Error while picking the file', err);
//       }
//     }

//     return (
//       <View>
//         <Button title="Choose File" onPress={pickFile} />
//         <Text>{fileUri}</Text>
//       </View>
//     );
//   };
};

export default PDFReader;
