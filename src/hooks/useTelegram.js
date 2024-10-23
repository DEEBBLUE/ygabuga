const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onToggleButton = () => {
        tg.MainButton.setParams('color','rgb(255,170,0)');
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
