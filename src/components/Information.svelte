<script>
    export let versionInfo = {};
</script>

<style>
    span {
        font-size: 12px;
        font-weight: normal;
    }
</style>
<h3>{versionInfo.NL_NAME} is running on port {versionInfo.NL_PORT} inside {versionInfo.NL_OS}<br><br><span>v{versionInfo.NL_VERSION}</span></h3>