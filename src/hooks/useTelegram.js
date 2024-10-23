const tg = window.Telegram.WebApp;

export function useTelegram() {
    tg.themeParams.button_color = "#FFAA00"
    tg.MainButton.text = "Открыть"
    const MainButton = tg.MainButton;
    return {
        MainButton
    }
}

export default useTelegram;
