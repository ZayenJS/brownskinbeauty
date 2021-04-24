import formidable from 'formidable';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  try {
    await fs.stat('./static');
  } catch (error) {
    await fs.mkdir('./static');
  } finally {
    form.uploadDir = './static';
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      console.log(err, fields, files);
    });
  }
};
