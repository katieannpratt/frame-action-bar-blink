/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

var application = require("application");

// application.run({ moduleName: "app-root", animated: false});

// uncomment line below for work-around (and comment out line above)
application.run({ moduleName: "app-root-alt", animated: false});

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
