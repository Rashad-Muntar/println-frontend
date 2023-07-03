// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import * as RNFS from 'react-native-fs';
// import * as mammoth from 'mammoth';

// const WordReader = () => {
//   const [textContent, setTextContent] = useState('');

//   const handleFileChange = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.doc, DocumentPicker.types.docx],
//       });

//       const fileUri = res.uri;

//       const arrayBuffer = await RNFS.readFile(fileUri, 'base64');
//       const options = { arrayBuffer: arrayBuffer };

//       mammoth.extractRawText(options).then((result) => {
//         setTextContent(result.value);
//       });
//     } catch (err) {
//       console.log('File selection error:', err);
//     }
//   };

//   return (
//     <View>
//       <Button title="Choose File" onPress={handleFileChange} />
//       <View>
//         <Text>{textContent}</Text>
//       </View>
//     </View>
//   );
// };

// export default WordReader;
