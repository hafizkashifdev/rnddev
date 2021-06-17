import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="widget-area">
            <div className="widget widget_insight">
                <ul>
                    <li>
                        <Link href="/about-us">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cookie-policy">
                            <a>Cookie Policy</a>
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms-and-conditions">
                            <a>Terms & Conditions</a>
                        </Link>
                    </li>
                </ul>
            </div>

        </aside>
    )
}

export default Sidebar;