'use client';
export default function FrontPage() {
    return (
        <body>
            <style jsx>{`
                div.topnav {
                    background-color: lightblue;
                    margin: auto;
                    width: 95%;
                    display: block;
                    color: black;
                    padding: 14px 16px;
                }`}
            </style>
            <div className="topnav">
                <input type="text" placeholder="Search.."/>
            </div>
            <ul>
                <li>App 1</li>
                <li>App 2</li>
                <li>App 3</li>
            </ul>
        </body>
    );
}