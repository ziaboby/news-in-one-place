export default (url: string): string => (url.match(/\/\/(www.|)([\w.]+)\//) || [])[2];
