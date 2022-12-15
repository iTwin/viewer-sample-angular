/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as webpack from 'webpack';
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";

export default (
    config: webpack.Configuration,
) => {
  // do your config modifications here
  config.resolve = {
    ...config.resolve,
    alias: {
      url: "whatwg-url" // need this because of a bug in node-url https://github.com/defunctzombie/node-url/issues/53
    },
  };
  config.plugins?.push(
    new NodePolyfillPlugin({
      excludeAliases: ["url"] // need this because of a bug in node-url https://github.com/defunctzombie/node-url/issues/53
    }) 
  );
  return config;
}