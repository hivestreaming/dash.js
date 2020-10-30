export default function getDashParserFactory(): DashParserFactory;

declare interface DashParserFactory {
    create(): DashParser;
}
    
declare class DashParser {
    parse(data: string): any;
}
