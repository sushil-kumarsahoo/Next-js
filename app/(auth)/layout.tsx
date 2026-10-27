import { ReactNode } from "react";

export default function authLayout({children}: {
    children: ReactNode
}) {
    return <div>
        <div>header</div>
        <div>{children}</div>
        <div>Footer</div>
    </div>

}