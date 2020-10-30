export default class X2JS {
    constructor(config?: Config);

    xml_str2json(xmlStr: string): any;

    json2xml_str(json: any): string;
}

declare interface Config {
    escapeMode?: boolean;
    useDoubleQuotes?: boolean;
    stripWhitespaces?: boolean;
    arrayAccessForm?: 'none' | 'property';
    emptyNodeForm?: 'text' | 'object';
    enableToStringFunc?: boolean;
    arrayAccessFormPaths?: Array<Path>;
    skipEmptyTextNodesForObj?: boolean;
    datetimeAccessFormPaths?: Array<Path>;
    xmlElementsFilter?: Path;
    jsonPropertiesFilter?: Path;
    keepCData?: boolean;
}

declare type Path = 'string' | RegExp | Function;


