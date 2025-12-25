import AWS from "aws-sdk";
import url from 'node:url';
import dotenv from "dotenv";
dotenv.config();

const s3 = new AWS.S3({ 
  endpoint: 'sgp1.vultrobjects.com',  // Use the appropriate endpoint for your VULTR region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,  // Your VULTR Object Storage Access Key
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,  // Your VULTR Object Storage Secret Key
  region: 'us-east-1',  // VULTR uses 'us-east-1' as the default region for the S3 API
  s3ForcePathStyle: true  // Necessary to work with VULTR's API
});


export const bucketName = process.env.AWS_BUCKET_NAME;

export const generateUniqueFilename = (originalFilename) => {
  const randomString = Math.random().toString(36).substring(2, 15);
  const uniqueFilename = `${randomString}-${originalFilename}`;
  return uniqueFilename;
};

export const uploadToS3 = (file) => {
  if (!file || !file.data) {
    console.log("File or file data is undefined");
    return;
  }
  const newName = Date.now();

  const regex = /user-\d+ \(\d+\)/;

  // const updatedString = file.name.replace(regex, newName);

  return new Promise((resolve, reject) => {
    // const uniqueFilename = generateUniqueFilename(updatedString);

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: file.name,
      Body: Buffer.from(file.data),
      ACL: process.env.AWS_ACL,
    };

    s3.upload(uploadParams, function (err, data) {
      if (err) {
        reject(err);
      } else {
        // console.log("Upload success", data.Location);
        resolve(data);
      }
    });
  });
};

export const deleteFromS3 = (key) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    };

    s3.deleteObject(params, function (err, data) {
      if (err) {
        console.log("Error deleting file from S3", err);
        reject(err);
      } else {
        console.log("File deleted from S3");
        resolve(data);
      }
    });
  });
};

export const updateToS3 = async (oldFileUrl, file) => {
  try {
    const parsedUrl = url.parse(oldFileUrl);
    const bucketName = parsedUrl.pathname.split('/')[1];  // Extract bucket name from the path
    const fileName = decodeURIComponent(parsedUrl.pathname.substring(1));  // Extract file name
    
    // Ensure the correct file is being deleted
   await deleteFromS3(fileName); // Assuming deleteFromS3 accepts file name

    // Generate new unique file name
    const newName = Date.now();
    const regex = /user-\d+ \(\d+\)/;

    // Remove any folder structure from the file name
    const updatedString = fileName.replace(regex, newName);

    return new Promise(async (resolve, reject) => {
      const uniqueFilename = generateUniqueFilename(updatedString);

      // Ensure the new filename does not include slashes or directories
      const sanitizedFileName = uniqueFilename.replace(/[^a-zA-Z0-9_\-\.]/g, ""); // Keeping only alphanumeric characters and some safe symbols


      const uploadParams = {
        Bucket: bucketName,
        Key: file?.name,  // Set key as just the sanitized file name
        Body: Buffer.from(file.data),
        ACL: process.env.AWS_ACL,  // Using the specified ACL from env
      };

      s3.upload(uploadParams, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};


export const generateSignedUrlFromLocation=async(fileLocation) =>{
  // Parse the Location URL to extract bucket name and key
  const parsedUrl = url.parse(fileLocation);
  const bucketName = parsedUrl.pathname.split('/')[1];  // 'safeplate' bucket name
  const fileKey = decodeURIComponent(parsedUrl.pathname.substring(bucketName.length + 2));  // Remove leading `/bucketname/` and decode

  const params = {
    Bucket: bucketName,  // Extracted bucket name
    Key: fileKey,  // Extracted file key
    Expires: 7200,  // Expiration time in seconds (default 2 hour)
  };

  // Generate a signed URL for accessing the file
  const signedUrl = s3.getSignedUrl('getObject', params);

  return signedUrl;
}