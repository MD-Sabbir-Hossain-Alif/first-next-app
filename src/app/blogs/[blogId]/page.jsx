import Link from "next/link";

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

const BlogDetailsPage = async ({ params }) => {
    const { blogId } = await params;
    // console.log("Blog Id:", blogId);
    const blog = blogs.find((blog) => blog.id === parseInt(blogId));
    // console.log(blog);
    if (!blog) {
        return (
            <h4 className="text-3xl text-center mt-10">
                Blog Details comming soon
            </h4>
        );
    }
    const { title, content, author } = blog;
    return (
        <div>
            {blog && (
                <div className="space-y-2 mt-10 border border-gray-100 rounded-2xl p-4 max-w-md mx-auto">
                    <h4 className="text-2xl">{title}</h4>
                    <p>{content}</p>
                    <p className="text-gray-400">{author}</p>
                    <Link href="/blogs" className="btn btn-info btn-outline">
                        Blogs
                    </Link>
                </div>
            )}
        </div>
    );
};

export default BlogDetailsPage;
