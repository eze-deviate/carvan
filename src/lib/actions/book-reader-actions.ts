"use server";
import * as path from "path";

export const getFileExtensionFromUrl = async (url: string) => {
  let fileExtension;

  fileExtension = path.extname(url);

  return fileExtension;
};
