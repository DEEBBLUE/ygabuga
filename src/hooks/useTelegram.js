const tg = window.Telegram.WebApp;

export function useTelegram() {
    tg.themeParams.button_color = "#FFAA00"
    tg.MainButton.text = "Открыть"
    

    const showMainButton = tg.MainButton.show();
    const hideMainButton = tg.MainButton.hide();

    return {
        showMainButton,
        hideMainButton,
        tg
    }
}

export default useTelegram;
