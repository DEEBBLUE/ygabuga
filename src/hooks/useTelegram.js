const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onToggleButton = () => {
        tg.themParams.color = "#FFAA00"
        tg.MainButton.setParams();
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
