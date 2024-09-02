import React, { useEffect } from 'react';

export default function SiteMap() {
    useEffect(() => {
        // Perform redirection when the component mounts
        window.location.href = 'https://nasirahmadahmady.site/sitemap.xml'; // Adjust the URL if needed
    }, []);

    return (
        <div>
            <h1>Redirecting to Sitemap...</h1>
        </div>
    );
}
