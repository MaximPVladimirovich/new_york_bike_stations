/*
 * Copyright 2020 Google LLC

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
*  https:ww.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';
import dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const CONFIG = {
  mode: 'production',

  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/big_query.json", to: "big_query.json" },
        { from: "./src/styles/styles.css", to: "styles/styles.css" },
        // "path/to/source", // absolute or relative, files/directories/globs - see below for examples
      ],
    }),
    new dotenv()
  ]
};

export default CONFIG;
