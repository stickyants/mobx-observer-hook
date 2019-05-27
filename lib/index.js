"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const mobx_1 = require("mobx");
function useObserver(cb, deps = []) {
    const [val, setState] = react_1.useState(cb);
    const ref = react_1.useRef({
        isFirstTime: true,
    });
    react_1.useEffect(() => {
        if (!ref.current.isFirstTime) {
            setState(cb());
        }
        ref.current.isFirstTime = false;
        return mobx_1.reaction(cb, v => setState(v));
    }, deps);
    return val;
}
exports.useObserver = useObserver;
