import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { babel } from '@rollup/plugin-babel';
import path from "path";
import dotenv from "dotenv-flow";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === "production";

const template = ({ attributes }) => `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${attributes.title}</title>
        <style>
        html,
        body {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            image-rendering: optimizeSpeed;
            background-color: #F5F5F5
        }
        canvas {
            position: absolute;           
            width: 100%;
            height: 100%;
            touch-action: none;
        }
        
        canvas:focus {
           outline: none;
        }       
    </style>
    </head>

    <body>       
      <canvas id="3d-preview"></canvas>
      <script defer type="module" src="./index.js"></script>    
    </body>
    </html>`;

export default {
  input: path.resolve(
    __dirname,
    `src/index.js`
  ),
  output: {
    file: `build/index.js`,
    format: "es",
    sourcemap: false,
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),

    commonjs({
      include: /node_modules/,
    }),

    image(),

    babel({ babelHelpers: 'bundled' }),

    copy({
      targets: [
        {
          src: `assets/scene_preview`,
          dest: `build/assets`,
        },
      ],
      copyOnce: true,
    }),

    html({
      attributes: {
        title: "3D preview",
      },
      publicPath: path.resolve(__dirname, `build`),
      template,
    }),

    !isProduction &&
      serve({
        open: true,
        contentBase: path.resolve(__dirname, `build`),
        host: "localhost",
        port: 10003,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }),

    !isProduction &&
      livereload({
        watch: path.resolve(__dirname, "build"),
        exts: ["html", "js"],
      })   
  ],
};
