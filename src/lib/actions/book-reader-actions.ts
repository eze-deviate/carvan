"use server";
import * as path from "path";

export const getFileExtensionFromUrl = async (url: string) => {
  const fileExtension = path.extname(url);

  return fileExtension;
};
