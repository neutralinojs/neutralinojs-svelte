import App from './App.svelte';    

Neutralino.init({
    load: function() {

        const app = new App({
            target: document.body,
            props: {
                NL_NAME,
                NL_PORT,
                NL_VERSION,
                NL_OS,
                Neutralino
            }
        });
        
        window.app = app;
    },
    pingSuccessCallback : function() {
        
    },
    pingFailCallback : function() {
            app.exit();
    }
});