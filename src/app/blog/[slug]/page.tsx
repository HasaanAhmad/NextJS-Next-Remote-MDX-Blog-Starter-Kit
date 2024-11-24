import { getAllBlogs, getBlogBySlug, parseMDXContent } from '@/lib/mdx';
import MDXRenderer from '@/components/MDXComponent';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/mdx'; // Import the date formatter
import Image from 'next/image';

export async function generateStaticParams() {
    const posts = getAllBlogs();
    return posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);
    if (!blog) return notFound();

    // Format the date using the date formatter
    const formattedDate = formatDate(blog.date);

    // Parse MDX content
    const mdxSource = await parseMDXContent(blog.content);

    return (
        <div className="p-6">
            <Image src={blog.thumbnail} className='rounded-lg mb-2' alt={blog.title} width={800} height={400} />
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-500 mb-2">{formattedDate} | {blog.author}</p>
            <article className="prose">
                <MDXRenderer source={mdxSource} />
            </article>
        </div>
    );
}
