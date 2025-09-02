App = window.App || {};
App.Init = (function Init() {
    var originalInfoEl = document.querySelector('.logs');
    var logsEl = document.querySelector('.info');
    var HIDDEN_CLASS_NAME = 'hidden';
    var buttonsWithHandlers = [
        {
            elementSelector: '.toggle-info',
            handler: toggleInfo
        }
    ];
    var infoTimeoutId = setTimeout(function () {
        originalInfoEl.classList.add(HIDDEN_CLASS_NAME);
        logsEl.classList.add(HIDDEN_CLASS_NAME);
    }, 8000);
    var logsContainerEl = document.querySelector('.newLogsContainer');
    var SCROLL_STEP = 200;
    
    // 加载频道数据到info框
    function loadChannelsToInfo() {
        var logsContainer = originalInfoEl.querySelector('.logsContainer');
        
        // 清空现有的内容（保留标题）
        while (logsContainer.firstChild) {
            logsContainer.removeChild(logsContainer.firstChild);
        }
        
        // 清空之前的频道handlers，避免累积
        buttonsWithHandlers = [
            {
                elementSelector: '.toggle-info',
                handler: toggleInfo
            }
        ];
        
        // 创建标题
        var titleEl = document.createElement('h3');
        titleEl.textContent = '';
        titleEl.style.marginTop = '0';
        titleEl.style.lineHeight = '0px';
        titleEl.style.marginBottom = '10px';
        logsContainer.appendChild(titleEl);
        
        // 添加调试信息
        console.log('App.ChannelData:', App.ChannelData);
        
        // 临时存储频道handlers，等待所有频道创建完毕后再注册
        var channelHandlers = [];
        
        // 检查是否有频道数据
        if (App.ChannelData && typeof App.ChannelData.getChannels === 'function') {
            try {
                var channels = App.ChannelData.getChannels();
                console.log('Channels count:', channels ? channels.length : 0);
                
                if (channels && channels.length > 0) {
                    // 按分组整理频道
                    var channelsByGroup = {};
                    for (var i = 0; i < channels.length; i++) {
                        var channel = channels[i];
                        if (!channelsByGroup[channel.group]) {
                            channelsByGroup[channel.group] = [];
                        }
                        channelsByGroup[channel.group].push(channel.name);
                        console.log('添加频道到分组:', channel.name, '分组:', channel.group, 'URL:', channel.url);
                    }
                    
                    // 遍历分组并添加频道
                    for (var group in channelsByGroup) {
                        if (channelsByGroup.hasOwnProperty(group)) {
                            // 添加分组标题
                            var groupEl = document.createElement('p');
                            groupEl.textContent = group + ':';
                            groupEl.style.fontWeight = 'bold';
                            groupEl.style.marginTop = '15px';
                            groupEl.style.marginBottom = '5px';
                            groupEl.style.paddingLeft = '5px';
                            logsContainer.appendChild(groupEl);
                            
                            // 添加该分组下的所有频道
                            var groupChannels = channelsByGroup[group];
                            for (var j = 0; j < groupChannels.length; j++) {
                                var channelName = groupChannels[j];
                                // 找到对应的频道数据 - 使用ES5兼容的方式
                                var channelData = null;
                                for (var k = 0; k < channels.length; k++) {
                                    if (channels[k].name === channelName) {
                                        channelData = channels[k];
                                        console.log('找到频道数据:', channelName, '->', channelData.url);
                                        break;
                                    }
                                }
                                
                                if (!channelData) {
                                    console.error('未找到频道数据:', channelName);
                                }
                                
                                // 创建唯一的class名称
                                var channelClass = 'channel-' + channelName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
                                
                                var pEl = document.createElement('p');
                                pEl.textContent = channelName;
                                pEl.setAttribute('data-list-item', '');
                                pEl.setAttribute('data-channel-url', channelData ? channelData.url : '');
                                pEl.className = channelClass;
                                pEl.style.margin = '3px 0';
                                pEl.style.padding = '3px 0 3px 15px';
                                logsContainer.appendChild(pEl);
                                
                                // 为每个频道准备handler（但不立即注册）
                                if (channelData && channelData.url) {
                                    // 使用立即执行函数避免闭包问题，并添加唯一标识符
                                    var channelHandler = (function(name, url, uniqueId) {
                                        return function() {
                                            console.log('KeyHandler系统 - 频道handler被调用:', name, 'URL:', url, 'ID:', uniqueId);
                                            playChannel(url);
                                        };
                                    })(channelName, channelData.url, 'handler_' + channelName.replace(/[^a-zA-Z0-9]/g, '_'));
                                    
                                    // 添加到临时handlers数组
                                    channelHandlers.push({
                                        elementSelector: '.' + channelClass,
                                        handler: channelHandler,
                                        channelName: channelName,
                                        channelUrl: channelData.url
                                    });
                                    
                                    // 调试：输出频道信息
                                    console.log('准备频道handler:', channelName, '->', channelData.url, 'class:', channelClass, 'ID:', 'handler_' + channelName.replace(/[^a-zA-Z0-9]/g, '_'));
                                }
                            }
                        }
                    }
                } else {
                    // 如果没有频道数据，显示提示信息
                    var noDataEl = document.createElement('p');
                    noDataEl.textContent = '没有找到可用的频道数据';
                    noDataEl.setAttribute('data-list-item', '');
                    logsContainer.appendChild(noDataEl);
                }
            } catch (error) {
                console.error('获取频道数据时出错:', error);
                var errorEl = document.createElement('p');
                errorEl.textContent = '获取频道数据时出错: ' + error.message;
                errorEl.setAttribute('data-list-item', '');
                logsContainer.appendChild(errorEl);
            }
        } else {
            // 如果ChannelData不可用，显示提示信息
            console.error('App.ChannelData 不可用或 getChannels 不是函数');
            var unavailableEl = document.createElement('p');
            unavailableEl.textContent = '频道数据模块不可用';
            unavailableEl.setAttribute('data-list-item', '');
            logsContainer.appendChild(unavailableEl);
        }
        
        // 所有频道创建完毕后，统一注册handlers
        console.log('所有频道创建完毕，准备注册handlers，频道数量:', channelHandlers.length);
        
        // 清理KeyHandler系统中的旧handlers
        if (App.KeyHandler.clearHandlers) {
            App.KeyHandler.clearHandlers();
        }
        
        // 频道加载完成后，确保第一个频道可见（如果Info菜单是活跃的）
        setTimeout(function() {
            var infoMenu = App.Navigation.getMenu('Info');
            if (infoMenu && infoMenu.getItems().length > 0) {
                // 确保第一个频道可见
                infoMenu.setFocusedElemIdx(0);
                App.Navigation.scrollToActiveItem && App.Navigation.scrollToActiveItem(infoMenu);
            }
        }, 100);
        
        if (channelHandlers.length > 0) {
            // 将频道handlers添加到buttonsWithHandlers数组
            buttonsWithHandlers = buttonsWithHandlers.concat(channelHandlers);
            
            // 注册所有handlers（包括toggle-info和频道handlers）
            App.KeyHandler.addHandlersForButtons(buttonsWithHandlers);
            console.log('已注册的总handlers数量:', buttonsWithHandlers.length);
            
            // 调试：验证每个频道的DOM元素是否存在
            for (var m = 0; m < channelHandlers.length; m++) {
                var handler = channelHandlers[m];
                var element = document.querySelector(handler.elementSelector);
                console.log('验证频道元素:', handler.channelName, '选择器:', handler.elementSelector, '元素存在:', !!element);
            }
            
            // 调试：列出所有注册的频道
            for (var k = 0; k < channelHandlers.length; k++) {
                var handler = channelHandlers[k];
                console.log('频道handler ' + (k + 1) + ':', handler.elementSelector, '频道:', handler.channelName, 'URL:', handler.channelUrl);
            }
        } else {
            // 如果没有频道handlers，只注册toggle-info按钮
            App.KeyHandler.addHandlersForButtons(buttonsWithHandlers);
            console.log('只注册了toggle-info按钮handler');
        }
    }

    function toggleInfo() {
        if (infoTimeoutId !== null) {
            clearTimeout(infoTimeoutId);
            infoTimeoutId = null;
        }

        originalInfoEl.classList.toggle(HIDDEN_CLASS_NAME);
        logsEl.classList.toggle(HIDDEN_CLASS_NAME);
    }
    
    // 播放频道的函数
    function playChannel(channelUrl) {
        console.log('播放频道:', channelUrl);
        
        // 检查是否有全局播放器实例
        if (window.globalPlayer) {
            // 如果播放器已存在，切换视频源
            window.globalPlayer.changeVideo(channelUrl);
            // 关键：切换视频源后需要调用play()函数开始播放
            setTimeout(function() {
                window.globalPlayer.play();
            }, 100); // 给一点时间让视频源切换完成
        } else {
            // 创建新的播放器实例
            var playerLogger = App.Logger.create({
                loggerEl: document.querySelector('.newLogsContainer'),
                loggerName: 'Player',
                logLevel: App.Logger.logLevels.ALL
            });
    
            var playerConfig = {
                url: channelUrl,
                playerEl: document.querySelector('#av-player'),
                controls: document.querySelector('.buttons'),
                timerEl: document.querySelector('.time'),
                logger: playerLogger
            };
    
            // 创建播放器实例
            window.globalPlayer = App.VideoPlayer.create(playerConfig);
            // 新创建的播放器会自动开始播放（因为initialize函数会调用prepareAndPlay）
        }
    }

    App.Utils.displayPairEl('.firmware', 'Firmware', App.Utils.getTVFirmware);
    App.Utils.displayPairEl('.model', 'Model', App.Utils.getTVModel);

    // 在DOM完全加载后调用加载频道数据到info框的函数
    document.addEventListener('DOMContentLoaded', function() {
        loadChannelsToInfo();
    });
    
    // 为info内的p元素添加处理函数
    App.KeyHandler.addHandlerForDelegated('.logs', function(infoItem) {
        // 当用户选择info内的p元素时的处理函数
        console.log('Info item selected:', infoItem.textContent);
        // 可以在这里添加任何你想要的处理逻辑
    });
    
    App.KeyHandler.initKeyHandler();

    App.Navigation.registerMenu({
        domEl: document.querySelector('#buttons'),
        name: 'Basic',
        onAfterLastItem: function () {
            var isNotFullscreen = !document.querySelector('.fullscreenMode');
            if (isNotFullscreen) {
                App.Navigation.changeActiveMenu('Info'); // 先切换到Info菜单
            }
        }
    });

    // 为info部分的p元素注册菜单
    App.Navigation.registerMenu({
        domEl: originalInfoEl.querySelector('.logsContainer'),
        name: 'Info',
        previousMenu: 'Basic',
        alignment: 'vertical',
        selectionVisible: true,
        onKeyEnter: function() {
            // 暂时禁用Navigation系统的Enter键处理，避免与KeyHandler系统冲突
            console.log('Navigation系统Enter键被禁用，使用KeyHandler系统处理');
            return;
            
            // 获取当前聚焦的项目
            var activeMenu = App.Navigation.getActiveMenu();
            var focusedItem = activeMenu.getItems()[activeMenu.getFocusedElemIdx()];
            var channelUrl = focusedItem.getAttribute('data-channel-url');
            
            console.log('Navigation系统按Enter键，当前聚焦项目:', focusedItem.textContent);
            console.log('Navigation系统 - 频道URL:', channelUrl);
            console.log('Navigation系统 - 元素class:', focusedItem.className);
            
            // 如果有频道URL，直接播放该频道
            if (channelUrl && channelUrl.trim() !== '') {
                console.log('Navigation系统 - 播放选中的频道:', channelUrl);
                playChannel(channelUrl);
            }
        },
        onPreviousMenu: function () {
            // 当离开Info菜单时的处理
        }
    });

    // 为logs部分注册菜单
    App.Navigation.registerMenu({
        domEl: logsEl,
        name: 'Logs',
        previousMenu: 'Info', // 改为从Info菜单可以切换到Logs菜单
        alignment: 'vertical',
        onPreviousMenu: function () {
            // If logs were created when user had focus on logs menu
            logsContainerEl.scrollTop = logsContainerEl.scrollHeight;
        }
    });

    // 修改滚动处理逻辑，使其与选择功能兼容
    document.body.addEventListener('keydown', function (event) {
        // 只有在Logs菜单时才处理滚动
        if (App.Navigation.getActiveMenu() && App.Navigation.getActiveMenu().name === 'Logs') {
            if (event.keyCode === 38 && logsEl.querySelector('.active')) { // UP button and focus on logs
                logsContainerEl.scrollTop -= SCROLL_STEP;
            } else if (event.keyCode === 40 && logsEl.querySelector('.active')) { // DOWN button and focus on logs
                logsContainerEl.scrollTop += SCROLL_STEP;
            }
        }
    });
}());
