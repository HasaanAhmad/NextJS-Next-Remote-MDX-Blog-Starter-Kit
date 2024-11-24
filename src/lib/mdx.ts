import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
export interface BlogMetadata {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    thumbnail: string;
    date: string; // Use ISO string format for consistency
    category: string;
    image: string;
}

export interface Blog extends BlogMetadata {
    slug: string;
    content: string;
}

export const formatDate = (date: string | Date): string => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};


const contentDir = path.join(process.cwd(), 'content');


export const getAllBlogs = (): Blog[] => {
    const files = fs.readdirSync(contentDir);

    const blogs = files.map((filename) => {
        const filePath = path.join(contentDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        const metadata = data as BlogMetadata;

        return {
            slug: filename.replace('.mdx', ''),
            content,
            ...metadata,
        };
    });

    // Sort blogs by date in descending order (latest first)
    return blogs.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
};

export const getBlogBySlug = (slug: string): Blog | null => {
    const filePath = path.join(contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    const metadata = data as BlogMetadata;

    return {
        slug,
        content,
        ...metadata,
    };
};

export const parseMDXContent = async (content: string) => {
    // Serialize the raw MDX content into something that `next-mdx-remote` can render
    const mdxSource = await serialize(content);
    return mdxSource;
};