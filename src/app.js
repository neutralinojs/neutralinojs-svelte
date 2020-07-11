import App from './App.svelte';    

Neutralino.init({
    load: function() {

        const app = new App({
            target: document.body,
            props: {
                name: 'worlie',
                NL_OS,
                Neutralino
            }
        });
        
        window.app = app;
    },
    pingSuccessCallback : function() {
        Neutralino
    },
    pingFailCallback : function() {
            app.exit();
    }
});