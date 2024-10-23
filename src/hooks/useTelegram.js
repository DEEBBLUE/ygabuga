const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onToggleButton = () => {
        const param = {
            "color" : '255.170.00' 
        };
        tg.MainButton.setParams(param);
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
