export function config(process: NodeJS.Process) {
    if (process.env.NODE_ENV === 'development') {
        process.env.PORT = 8999;
    }
    return process;
}