/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        });
        // if(!options.isServer){
        //     // config.resolve.fallback = {
        //     //     ...config.resolve.fallback,
        //     //     canvas: false,
        //     //   };
        //       config.resolve.alias.canvas = false;
        // }
        config.externals = [...config.externals, { canvas: "canvas" }];
        if (!options.isServer) {
            // Use null-loader for canvas in client-side builds to completely ignore it
            config.module.rules.push({
                test: /canvas/,
                use: 'null-loader',
            });

            // Set fallback for canvas to false
            config.resolve.fallback = {
                ...config.resolve.fallback,
                canvas: false,
            };
        }
        return config;
    },
    experimental: {
        esmExternals: "loose", // required for the canvas to work
      },
      
    async redirects() {
    return [
        {
        source: "/",
        destination: "/home",
        permanent: false,
        
        },
    ];
    },
};

export default nextConfig;
