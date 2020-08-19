import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Code = ({
    className,
    ...restProps
}) => {
    let language;
    if (className && className.split('language-')[1] && className.split('language-')[1].split(' ')[0]) {
        language = className.split('language-')[1].split(' ')[0]
    }
    console.log(language, className, restProps.children);
    if (language) {
        return (
            <SyntaxHighlighter language={language} style={darcula} >
                {restProps.children}
            </SyntaxHighlighter>
        );
    }
    return (
        <code className="1212" > {restProps.children} </code>
    );
}