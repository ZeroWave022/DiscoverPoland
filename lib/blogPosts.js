import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export async function getPosts() {
    const files = fs.readdirSync(postsDir);
    const postsData = await Promise.all(files.map(async (file) => {
        const readContents = fs.readFileSync(`${postsDir}/${file}`);
        const id = file.replace(".md", "");

        const matterRes = matter(readContents);

        const postDate = new Date(matterRes.data.date)

        const timestamp = postDate.getTime();
        const readableDate = postDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        });

        const processedHTML = await remark().use(html).process(matterRes.content);
        const contentHTML = processedHTML.toString();
        
        return {
            id: id,
            title: matterRes.data.title,
            date: readableDate,
            timestamp: timestamp,
            sourceName: matterRes.data.sourceName,
            sourceLink: matterRes.data.sourceLink,
            content: contentHTML,
        }
    }));

    postsData.sort((a, b) => {
        if (a.timestamp < b.timestamp) {
            return 1
        } else {
            return -1
        }
    });

    return postsData;
}
