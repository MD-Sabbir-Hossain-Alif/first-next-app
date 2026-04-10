import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

export const metadata = {
    title: "Blogs",
    description: "...",
};

const blogs = [
    {
        id: 1,
        title: "Getting Started with Blogging",
        author: "John Doe",
        date: "2026-04-01",
        category: "Education",
        tags: ["blogging", "beginner", "writing"],
        content: "This is a beginner's guide to starting your own blog...",
        views: 1200,
        isPublished: true,
    },
    {
        id: 2,
        title: "Top 10 Travel Destinations",
        author: "Jane Smith",
        date: "2026-04-03",
        category: "Travel",
        tags: ["travel", "adventure", "destinations"],
        content: "Explore the most amazing places to visit this year...",
        views: 980,
        isPublished: true,
    },
    {
        id: 3,
        title: "Healthy Eating Tips",
        author: "Alex Brown",
        date: "2026-04-05",
        category: "Health",
        tags: ["health", "food", "lifestyle"],
        content: "Eating healthy doesn't have to be difficult...",
        views: 450,
        isPublished: false,
    },
    {
        id: 4,
        title: "Introduction to Web Development",
        author: "Emily White",
        date: "2026-04-07",
        category: "Technology",
        tags: ["web", "development", "coding"],
        content: "Learn the basics of HTML, CSS, and JavaScript...",
        views: 760,
        isPublished: true,
    },
];
const BlogsPage = () => {
    // console.log(blogs);
    return (
        <div className={roboto.className}>
            <h1 className="text-5xl font-bole mt-4 text-center">Blogs</h1>
            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="max-w-md w-full mx-auto space-y-2 border mt-4 p-4 rounded-2xl"
                >
                    <h3 className="3xl">Title: {blog.title}</h3>
                    <h4 className="2xl">Author: {blog.author}</h4>
                    <Link
                        href={`/blogs/${blog.id}`}
                        className="btn btn-primary btn-outline"
                    >
                        Show Details
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogsPage;
