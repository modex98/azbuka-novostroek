export const debounce = <T extends (...args: any[]) => any>(fn: T, duration: number = 1000) => {
    let timer: NodeJS.Timeout | undefined;

    return function (...args: Parameters<T>) {
        clearTimeout(timer);

        const ctx = this;

        timer = setTimeout(() => {
            fn.apply(ctx, args);
        }, duration);
    };
};

export const isFunction = (v: unknown): v is TFunc => typeof v === "function";

export const uuidGen = (payload = "some-random-string") => {
    let state = 0;

    return (inner_payload?: string) => {
        state++;
        return `uid-${Date.now()}-${state}-${inner_payload ?? payload}`;
    };
};

export const queuedLast = (fn: TFunc, timeout: number = 0) => {
    return setTimeout(fn, timeout);
};

function separateEach3BY(x: number, separator: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

export const format_thousands = (n: number) => {
    return separateEach3BY(n, " ");

    /*
    let _n = "";

    let ch = n.toString();

    let len = ch.length;

    for (let i = 0; i < len; i++) {
        const j = len - 1 - i;

        _n = `${ch[j]}${i % 3 === 0 ? " " : ""}` + _n;
    }

    return _n.trim();
*/
};

export const stripHTMLPTag = (payload: string) => {
    return payload?.replace(/(<p>)/gi, "")?.replace(/(<\/p>)/gi, "");
};

export const firstFewWords = (payload: string, count = 13) => {
    return payload?.split(" ").slice(0, count).join(" ");
};
