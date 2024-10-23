const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onToggleButton = () => {
        tg.themeParams.button_color = "#FFAA00"
        tg.MainButton.text = "Открыть"
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onToggleButton,
    }
}
