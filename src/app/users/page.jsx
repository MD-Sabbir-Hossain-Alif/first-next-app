import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Users",
    description: "All the users information",
};

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    // console.log(users);
    return (
        <div>
            {/* <h2 className="text-center">User is comming soon ....</h2> */}
            <div className="grid grid-cols-3 gap-5 py-10">
                {users.map((user) => (
                    <div key={user.id}>
                        <div className="card bg-secondary shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.email}</p>
                                <div className="card-actions justify-end">
                                    <Link
                                        href={`/users/${user.id}`}
                                        className="btn btn-primary"
                                    >
                                        User Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersPage;
