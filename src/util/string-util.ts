export class StringUtil {

    /**
     * evaluates given inputStr by resolving placeholders using given placeholderKeyValueMap
     * 
     * @param inputStr input string with placeholder enclosed within ${placeholderKey}
     * @param placeholderKeyValueMap map of placeholder keys and its replacement values
     */
    evalPlaceholders(inputStr: string, placeholderKeyValueMap: Map<string, string>): string {
        const placeholderRegex = /\${(.*?)}/g;
        /* initialy copy inputStr to processedStr as-is*/
        let processedStr: string = inputStr;
        /* process iff inputStr and placeholderKeyValueMap is not empty*/
        if (inputStr && placeholderKeyValueMap && placeholderKeyValueMap.size > 0) {
            processedStr = inputStr.replace(placeholderRegex, (placeholderStr, placeholderKey) => {
                /* lookup placeholderKey in placeholderKeyValueMap*/
                let replacementStr = placeholderKeyValueMap.get(placeholderKey);
                if (replacementStr === undefined) {
                    /* use placeholderStr as-is if vaid replacement is not found in placeholderKeyValueMap*/
                    replacementStr = placeholderStr;
                }
                return replacementStr;
            });
        }
        return processedStr;
    }

}