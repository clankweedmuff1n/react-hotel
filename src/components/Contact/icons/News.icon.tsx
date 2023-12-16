import {SVGProps} from "react";

export function NewsIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M3 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8h-4"></path>
                <path d="M3 4h14v14a2 2 0 0 0 2 2v0M13 8H7m6 4H9"></path>
            </g>
        </svg>
    )
}