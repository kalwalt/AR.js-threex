var path = require('path');

module.exports = (env, argv) => {
    let devtool = false;
    if (argv.mode === 'development') {
        devtool = 'inline-source-map';
    }
    console.log(`${argv.mode} build`);
    const module = {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader',
            }]
        }
        ]
    };

    return [

        {
            name: "example-basic",
            devtool,
            experiments: {
                outputModule: true,
            },
            entry: './basic.ts',
            output: {
                path: path.resolve(__dirname, './dist'),
                filename: 'basic.mjs',
                library: {
                    type: 'module',
                },
            },
            resolve: {
                extensions: [".tsx", ".ts", ".js"],
            },
            module,
            externalsType: 'module',
            externals: {
                three: 'three',
            }
        },
        {
            name: "example-nft",
            devtool,
            experiments: {
                outputModule: true,
            },
            entry: './nft.ts',
            output: {
                path: path.resolve(__dirname, './dist'),
                filename: 'nft.mjs',
                library: {
                    type: 'module',
                },
            },
            resolve: {
                extensions: [".tsx", ".ts", ".js"],
            },
            module,
            externalsType: 'module',
            externals: {
                three: 'three',
            }
        }
    ];
};