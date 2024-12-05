module.exports = {

    flowFile: 'flows.json',
    credentialSecret: false,
    flowFilePretty: true,
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$12$egCp7MzuVVsT94Y7i5MpWO2uTxI2uUCS0X9tHp.H/ZchGTee07HIi",
            permissions: "*"
        }]
    },
    uiPort: process.env.NODEREDPORT,
    httpAdminRoot: '/admin',
    logging: {
         console: {
             level: "info",
             metrics: false,
             audit: false
         }
     },
     exportGlobalContextKeys: false,
     externalModules: {},
     disableEditor: (process.env.ENABLE_NODERED_EDITOR === '0'),
     editorTheme: {
        theme: "dark-scroll",
        tours: false,
        page: {title: "blinky-picoW-trays"},
        header: {title: "blinky-picoW-trays"},
        palette: {},

        projects: {
            enabled: false,
            workflow: {
                mode: "manual"
            }
        },
        codeEditor: 
        {
            lib: "monaco",
            options: 
            {
//                theme: "vs",
                formatOnType: false,
                formatOnPaste: false,
                useTabStops: true,
                colorDecorators: true,
                fontSize: 14,
                "bracketPairColorization.enabled": true,
                minimap: 
                {
                  enabled: false
                }
            }
        }
    },
    functionExternalModules: true,
    functionGlobalContext: {},
    debugMaxLength: 1000,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
}
