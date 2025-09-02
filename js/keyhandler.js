App = window.App || {};
App.KeyHandler = (function KeyHandler() {
    var handledDelegated = [];
    var handledButtons = [];
    var isKeyHandlerEnabled = true;


    function registerKey(key) {
        tizen.tvinputdevice.registerKey(key);
    }

    function registerKeyHandler(keyCode, keyName, handler) {
        if (keyName) {
            registerKey(keyName);
        }

        document.addEventListener('keydown', function keyHandler(event) {
            if (event.keyCode === keyCode) {
                handler(event);
            }
        });
    }

    function addHandlerForDelegated(parentElementSelector, handler) {
        handledDelegated.push({
            delegatedSelector: parentElementSelector,
            handler: handler
        });
    }

    function addHandlersForButtons(buttonsWithHandlers) {
        for (var i = 0; i < buttonsWithHandlers.length; i++) {
            var buttonWithHandler = buttonsWithHandlers[i];
            handledButtons.push({
                elementSelector: buttonWithHandler.elementSelector,
                handler: buttonWithHandler.handler
            });
        }
    }

    function initKeyHandler() {
        document.addEventListener('keydown', function onKeyDown(event) {
            var isHandled = false;

            if (!isKeyHandlerEnabled) {
                return;
            }

            for (var i = 0; i < handledButtons.length; i++) {
                var buttonWithHandler = handledButtons[i];
                var elem = document.querySelector(buttonWithHandler.elementSelector);

                if (event.keyCode === 13) {
                    console.log('KeyHandler检查元素:', buttonWithHandler.elementSelector, '元素存在:', !!elem, '有active类:', elem ? elem.classList.contains('active') : false);
                    
                    if (elem && elem.classList.contains('active')) {
                        console.log('KeyHandler找到匹配的handler:', buttonWithHandler.elementSelector);
                        buttonWithHandler.handler(event);
                        isHandled = true;
                        break; // 找到匹配的handler后立即退出
                    }
                }
            }

            if (!isHandled) {
                for (var j = 0; j < handledDelegated.length; j++) {
                    var delegatedWithHandler = handledDelegated[j];
                    var delegated = document.querySelector(delegatedWithHandler.delegatedSelector);
                    var children = delegated.querySelectorAll('[data-list-item]');

                    if (event.keyCode === 13) {
                        for (var k = 0; k < children.length; k++) {
                            if (children[k].classList.contains('active')) {
                                delegatedWithHandler.handler(children[k]);
                                break;
                            }
                        }
                    }
                }
            }
        });
    }

    function enableKeyHandler() {
        isKeyHandlerEnabled = true;
    }

    function disableKeyHandler() {
        isKeyHandlerEnabled = false;
    }

    function clearHandlers() {
        handledButtons = [];
        handledDelegated = [];
        console.log('KeyHandler系统已清理所有handlers');
    }

    return {
        addHandlerForDelegated: addHandlerForDelegated,
        addHandlersForButtons: addHandlersForButtons,
        registerKeyHandler: registerKeyHandler,
        initKeyHandler: initKeyHandler,
        enableKeyHandler: enableKeyHandler,
        disableKeyHandler: disableKeyHandler,
        clearHandlers: clearHandlers
    };
}());
