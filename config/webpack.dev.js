// // import path from 'path';
// const path = require("path");

// module.exports = {
// 	entry: {
// 		main: ["./src/main.js"],
// 	},
//     mode:"development",
// 	output: {
// 		filename: "[name]-bundle.js",
// 		path: path.resolve(__dirname, "../dist"),
// 		publicPath: "/",
// 	},
// 	devServer: {
// 		static: {
// 			directory: path.join(__dirname, "../dist/index.html"), // and update this line
// 			publicPath: "/",
// 		},
// 	},
// 	module: {
// 		rules: [
// 			{
//                 test: /\.css$/i,
//                 use: ["style-loader", "css-loader"],
//               },
// 			{
// 				test: /\.html$/i,
// 				use: [
// 					{
// 						loader: "file-loader",
// 						options: {
// 							name: "[name].html"
// 						},
// 					},
//                     {
// 						loader: "extract-loader"
// 					},
// 					{
// 						loader: "html-loader"
// 					}
// 				],
// 			},
// 		],
// 	},
// };


// const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = () => {
//  const pathToMainJs = require.resolve("../src/main.js");
//  const pathToIndexHtml = require.resolve("../src/index.html");

//  return {
//     entry: {
//       main: [pathToMainJs, pathToIndexHtml],
//     },
//     mode:"development",
//     output: {
//       filename: "[name]-bundle.js",
//       path: path.resolve(__dirname, "../dist"),
//       publicPath: "/",
//     },
//     devServer: {
//       static: {
//         directory: path.join(__dirname, "../dist"),
//         publicPath: "/",
//       },
//     },
//     plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
//     module: {
//       rules: [
//         // {
//         //   test: pathToIndexHtml,
//         //   use: [
//         //     "file-loader",
//         //     "extract-loader",
//         //     {
//         //       loader: "html-loader",
//         //     //   options: {
//         //     //     attrs: ["img:src", "link:href"],
//         //     //   },
//         //     },
//         //   ],
//         // },
//         {
//           test: /\.css$/,
//           use: [
//             MiniCssExtractPlugin.loader, "css-loader"
//             // "file-loader",
//             // "extract-loader",
//             // {
//             //   loader: "css-loader",
//             //   options: {
//             //     sourceMap: true,
//             //   },
//             // },
//           ],
//         },
//         // {
//         //   test: /\.jpg$/,
//         //   use: "file-loader",
//         // },
//         // {
//         //   test: /.html/i,
//         //   use: [
//         //     {
//         //       loader: "file-loader",
//         //       options: { name: "[name].html" },
//         //     },
//         //     { loader: "extract-loader" },
//         //     { loader: "html-loader" },
//         //   ],
//         // },
//       ],
//     },
//  };
// };

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
 const pathToMainJs = require.resolve("../src/main.js");
 const pathToIndexHtml = require.resolve("../src/index.html");

 return {
    entry: {
      main: [pathToMainJs],
    },
    mode:"development",
    output: {
      filename: "[name]-bundle.js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/",
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "../dist"),
        publicPath: "/",
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: pathToIndexHtml,
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, "css-loader"
          ],
        },
      ],
    },
 };
};