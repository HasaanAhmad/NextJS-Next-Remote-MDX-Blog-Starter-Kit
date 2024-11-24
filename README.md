
# Next.js Blog Starter Kit

A simple, static blog starter kit built with **Next.js 15**, **TypeScript**, and **TailwindCSS**. This project allows you to easily create and manage a blog using **MDX**. Just drop `.mdx` files in the `content` folder, and start writing your blog posts!

## Features

- **Next.js 15** for fast static site generation.
- **TypeScript** for type safety and development ease.
- **TailwindCSS** for utility-first styling.
- **TailwindCSS Typography Plugin** for beautiful typography in your MDX blog posts.
- **MDX support** to write your blog content using markdown mixed with JSX components.
- **Static generation** with Next.js for optimal performance.

## Setup

To get started, clone this repository and install the dependencies:

```bash
git clone <URL>
cd <project-name>
pnpm install
pnpm dev
```

Once the development server starts, you can open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Structure

1. **content folder**: This folder is where all the blog posts live. Simply create `.mdx` files here, and they will automatically be added to the site.
   - Add the frontmatter (like title, description, and date) at the top of each `.mdx` file to define metadata for the blog post.
   - The **TailwindCSS Typography Plugin** is used to style the MDX content beautifully.
   
2. **pages/blog/[slug].tsx**: A dynamic page that renders a blog post based on its slug.

3. **components/BlogCard.tsx**: This component is used to display each blog post on the blog index page with title, description, and publication date.

## Technologies Used

- **Next.js**: A React framework for building fast, production-ready web apps.
- **TypeScript**: A superset of JavaScript that adds type safety and powerful development features.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **@mdx-js/react**: An MDX renderer that allows you to write JSX within Markdown.
- **@tailwindcss/typography**: Tailwind CSS plugin to style the MDX content with beautiful typography.
- **date-fns**: A modern JavaScript library for working with dates.
- **gray-matter**: A library to parse frontmatter from markdown files.
- **next-mdx-remote**: A library to handle MDX content and render it remotely in Next.js.

## Writing a Blog Post

To write a new blog post:

1. Create a `.mdx` file in the `content` directory.
2. Add the following frontmatter at the top of your `.mdx` file:

```md
---
title: "Your Blog Post Title"
description: "A short description of your blog post."
keywords: ["keyword1", "keyword2"]
author: "Your Name"
thumbnail: "/path/to/thumbnail.jpg"
date: "YYYY-MM-DD"
category: "Category Name"
image: "/path/to/image.jpg"
---
```

3. Below the frontmatter, start writing your blog post in markdown, mixing in JSX components as needed.

### Example of a blog post:

```md
---
title: "My First Blog Post"
description: "This is my first blog post in my new blog."
keywords: ["nextjs", "blog", "mdx"]
author: "Hasaan Ahmad"
thumbnail: "/images/thumbnail.jpg"
date: "2024-11-24"
category: "General"
image: "/images/post-image.jpg"
---

# Welcome to My First Blog Post!

This is a sample blog post where I talk about setting up a blog using **Next.js** and **MDX**. You can easily add your own blog posts by creating `.mdx` files in the `content` directory.

## Why MDX?

MDX allows you to write JSX in Markdown, making it super flexible for creating custom components and adding interactive elements to your blog posts.

Enjoy writing blogs!
```

## Commands

- `pnpm install`: Install all dependencies.
- `pnpm dev`: Start the development server.
- `pnpm build`: Build the static site for production.

## License

This project is licensed under the MIT License.

---

Enjoy building your blog with this starter kit! If you have any questions or suggestions, feel free to open an issue or contribute to the project.
