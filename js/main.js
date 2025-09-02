App = window.App || {};

App.Main = (function Main() {
    var player;
    var playerStates = App.VideoPlayer.playerStates;

    function onReturn() {
        var playerState = player.getState();

        if (playerState !== playerStates.IDLE && playerState !== playerStates.NONE) {
            player.stop();
        } else {
            tizen.application.getCurrentApplication().hide();
        }
    }

    function registerKeyHandler(keyWithHandler) {
        App.KeyHandler.registerKeyHandler(keyWithHandler.keyCode, keyWithHandler.keyName, keyWithHandler.handler);
    }

    function registerKeyHandlers() {
        var keysWithHandlers = [
            { keyCode: 10252, handler: player.playPause, keyName: 'MediaPlayPause' },
            { keyCode: 415, handler: player.play, keyName: 'MediaPlay' },
            { keyCode: 19, handler: player.pause, keyName: 'MediaPause' },
            { keyCode: 413, handler: player.stop, keyName: 'MediaStop' },
            { keyCode: 417, handler: player.ff, keyName: 'MediaFastForward' },
            { keyCode: 412, handler: player.rew, keyName: 'MediaRewind' },
            { keyCode: 49, handler: player.toggleUhd, keyName: '1' },
            { keyCode: 50, handler: player.getTracks, keyName: '2' },
            { keyCode: 51, handler: player.getProperties, keyName: '3' },
            { keyCode: 10009, handler: onReturn }
        ];

        keysWithHandlers.forEach(registerKeyHandler);
    }

    function addButtonsHandlers() {
        var buttonsWithHandlers = [
            { elementSelector: '.play', handler: player.play },
            { elementSelector: '.pause', handler: player.pause },
            { elementSelector: '.stop', handler: player.stop },
            { elementSelector: '.ff', handler: player.ff },
            { elementSelector: '.rew', handler: player.rew },
            { elementSelector: '.fullscreen', handler: player.toggleFullscreen }
        ];

        App.KeyHandler.addHandlersForButtons(buttonsWithHandlers);
    }

    window.onload = function onload() {
        var playerLogger = App.Logger.create({
            loggerEl: document.querySelector('.newLogsContainer'),
            loggerName: 'Player',
            logLevel: App.Logger.logLevels.ALL
        });

        // 默认使用CCTV1，若未找到则回退到原默认地址
        var defaultUrl = 'https://ali-m-l.cztv.com/channels/lantian/channel003/1080p.m3u8';
        try {
            var channels = App.ChannelData && App.ChannelData.getChannels ? App.ChannelData.getChannels() : [];
            for (var i = 0; i < channels.length; i++) {
                if (channels[i] && channels[i].name === 'CCTV1' && channels[i].url) {
                    defaultUrl = channels[i].url;
                    break;
                }
            }
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn('获取频道数据失败，使用默认URL:', e && e.message);
        }

        var playerConfig = {
            url: defaultUrl,
            playerEl: document.querySelector('#av-player'),
            controls: document.querySelector('.buttons'),
            timerEl: document.querySelector('.time'),
            logger: playerLogger
        };

        // initialize player - loaded from videoPlayer.js
        player = App.VideoPlayer.create(playerConfig);
        
        // 将播放器实例保存为全局变量，供频道切换使用
        window.globalPlayer = player;

        registerKeyHandlers();
        addButtonsHandlers();

        // 页面加载完毕后自动开始播放
        try {
            player.play();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn('自动播放失败:', e && e.message);
        }
    };
}());
