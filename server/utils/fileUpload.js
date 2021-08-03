const cloudinary = require("cloudinary");

// A simple function to upload to Cloudinary
const uploadFile = async (file) => {
  // The Upload scalar return a a promise
  const { createReadStream } = await file;
  console.log(file);
  const fileStream = createReadStream();

  // Initiate Cloudinary with your credentials
  cloudinary.v2.config({
    cloud_name: "CLOUDINARY_CLOUD_NAME",
    api_key: "CLOUDINARY_API_KEY",
    api_secret: "CLOUDINARY_API_SECRET",
  });

  // Return the Cloudinary object when it's all good
  return new Promise((resolve, reject) => {
    const cloudStream = cloudinary.v2.uploader.upload_stream((err, fileUploaded) => {
      // In case something hit the fan
      if (err) {
        reject(err);
      }
      // All good :smile:
      resolve(fileUploaded);
    });

    fileStream.pipe(cloudStream);
  });
};

module.exports = uploadFile;