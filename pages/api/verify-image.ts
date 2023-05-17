import { v4 as uuidv4 } from "uuid";
import { FileReq } from "@_types/nft";
import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-iron-session";
import { addressCheckMiddleware, pinataJwtKey, withSession } from "./utils";
import FormData from "form-data";
import axios from "axios";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

export default withSession(
  async (req: NextApiRequest & { session: Session }, res: NextApiResponse) => {
    if (req.method === "POST") {
      const { bytes, fileName, contentType } = req.body as FileReq;

      if (!bytes || !fileName || !contentType) {
        return res.status(422).send({ message: "Image data are missing" });
      }

      await addressCheckMiddleware(req, res);

      const buffer = Buffer.from(Object.values(bytes));
      const formData = new FormData();

      formData.append("file", buffer, {
        contentType,
        filename: fileName + "-" + uuidv4,
      });

      const fileRes = await axios.post(
        "httpps://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          maxBodyLength: Infinity,
          headers: {
            Accept: "text/plain",
            "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
            Authorization: "Bearer " + pinataJwtKey,
          },
        }
      );

      return res.status(200).send(fileRes.data);
    } else {
      return res.status(422).send({ message: "Invalid endpoint" });
    }
  }
);
