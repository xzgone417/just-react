/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前文件的目录路径
const __dirname = path.dirname(__filename);
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
