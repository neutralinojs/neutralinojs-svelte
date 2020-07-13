<script>
    import Information from './components/Information.svelte';
    export let Neutralino;
    export let versionInfo = {
        NL_VERSION,
        NL_PORT,
        NL_OS,
        NL_NAME
    };
</script>

<style>
    #neutralinoapp {
    text-align: center;
    }
    #neutralinoapp h1{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        color: #000000;
    }
</style>
<div id="neutralinoapp">
    <h1>NeutralinoJs</h1>
    <Information versionInfo={versionInfo}></Information>
</div>
