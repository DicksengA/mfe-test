const {
    withNativeFederation,
    shareAll,
} = require("@softarc/native-federation/build")

module.exports = withNativeFederation({
    name: "mfe",

    exposes: {
        "./component": "./src/button/MyButton"
    },
    shared: {
        ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: true,
            includeSecondaries : true
        })
    },
    skip : [
        "react-dom/server",
        "react-dom/server.node",
        "react-dom/test-utils"
    ]
});
