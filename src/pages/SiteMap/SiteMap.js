import React, { useEffect, useState } from 'react';

export default function SiteMap() {
    const [sitemapContent, setSitemapContent] = useState('Loading...');

    useEffect(() => {
        const fetchSitemap = async () => {
            try {
                const response = await fetch('https://nasirahmadahmady.site/sitemap.xml');
                if (response.ok) {
                    const text = await response.text();
                    setSitemapContent(text);
                } else {
                    setSitemapContent(`Error: ${response.status}`);
                }
            } catch (error) {
                setSitemapContent(`Error: ${error.message}`);
            }
        };

        fetchSitemap();
    }, []);

    return (
        <>
            <h1>Sitemap</h1>
            <pre>{sitemapContent}</pre>
        </>
    );
}
