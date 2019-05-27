/// <reference types="react" />
declare type ObservableCallback = () => React.ReactNode;
export declare function useObserver(cb: ObservableCallback, deps?: any[]): import("react").ReactNode;
export {};
