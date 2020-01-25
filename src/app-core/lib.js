export class AppLib {
    showSettings() {
        Neutralino.settings.getSettings((d) => {
            alert(JSON.stringify(d));
        }, () => {

        });
    }
}