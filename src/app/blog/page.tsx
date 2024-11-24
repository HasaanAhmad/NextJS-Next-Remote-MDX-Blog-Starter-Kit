import { getAllBlogs } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
    const blogs = getAllBlogs();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
                <div key={blog.slug} className="bg-white p-6 rounded-lg shadow-md">
                    <Image src={blog.thumbnail} alt={blog.title} width={500} height={600} className="mb-4" />
                    <h2 className="text-2xl font-bold line-clamp-2">
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h2>
                    <p className="text-gray-500 mb-4">{blog.description}</p>
                    <p className="text-sm text-gray-400">{blog.date}</p>
                </div>
            ))}
        </div>
    );
}
