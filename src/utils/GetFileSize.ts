import RNFetchBlob from 'rn-fetch-blob';
import PDFLib, {PDFDocument} from 'react-native-pdf-lib';

interface Props {
  pdfUrl: string;
}
const GetFileSize = async ({pdfUrl}: Props) => {
  try {
    const response = await RNFetchBlob.config({fileCache: true}).fetch(
      'GET',
      pdfUrl,
    );
    const pdfBytes = await response.readFile('base64');
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pagesCount = pdfDoc.getPageCount();
    return pagesCount;
  } catch (error) {
    console.log('Error while fetching or processing PDF:', error);
  }
};

export default GetFileSize;
