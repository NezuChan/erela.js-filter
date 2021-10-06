const config = {
    TITLE: "erela.js-filter", 
    SITE_NAME: "erela.js-filter",
    THEME: "light", 
    NAV: {
        ICON: {
            TYPE: "TEXT", 
            VALUE: "erela.js-filter", 
            HREF: "/"
        },
        BUTTONS: [
            {
                label: "Home",
                path: "/",
                newPage: false
            },
            {
                label: "Documentation",
                path: "/docs",
                newPage: false
            },
            {
                label: "Discord",
                path: "https://discord.gg/b47d4AqxFR",
                newPage: true
            },
            {
                label: "GitHub",
                path: "https://github.com/NezuChan/erela.js-filter",
                newPage: true
            }
        ]
    },
    INSTALL_COMMAND: "npm i erela.js-filter",
    HOME_LOGO: {
        TYPE: "TEXT",
        VALUE: "erela.js-filter"
    },
    DESCRIPTION: {
        TITLE: "About",
        VALUE: "Since erela.js has no natively support filter, why dont we create a easy to use?"
    },
    DESCRIPTION_LIST: {
        TITLE: "Why?",
        VALUE: ["An reasy to use filter usage for erela.js user"]
    },
    FOOTER: {
        HEADER: "",
        DESCRIPTION: "erela.js-filter documentation site"
    },
    LINKS: {
        string: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        String: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        number: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
        Number: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
        boolean: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
        Boolean: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
        symbol: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
        Symbol: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
        void: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",
        Object: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
        object: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
        Function: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
        function: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
        Array: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        Set: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
        Map: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
        Date: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
        RegExp: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
        Promise: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        Error: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",
        EventEmitter: "https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",
        Timeout: "https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",
        Buffer: "https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",
        ReadableStream: "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",
        Readable: "https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",
        ChildProcess: "https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",
        Worker: "https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",
        MessagePort: "https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport",
      }
};

export default config;