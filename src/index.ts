import axios from 'axios';

const getDouHtml = async (): Promise<any> => {
  const result = await axios.get('https://dou.ua/');

  return result.data;
};

const getImages = async (): Promise<string[]> => {
  const html = await getDouHtml();

  return html.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gmi);
};

const logImages = async (): Promise<void> => {
  const images = await getImages();

  console.log(images);
};

logImages();

