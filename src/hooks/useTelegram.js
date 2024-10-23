const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onToggleButton = () => {
        theme = themParams.color = "#FFAA00"
        tg.MainButton.setParams(theme);
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
