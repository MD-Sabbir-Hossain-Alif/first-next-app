import Link from "next/link";
import React from "react";

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    // console.log(userId);
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    const user = await res.json();
    // console.log(user);
    return (
        <div className="text-center space-y-2 max-w-md w-full mx-auto bg-sky-900 p-4 rounded-2xl mt-10">
            <h2 className="text-center text-2xl underline">User Details</h2>
            <div className="text-left bg-sky-700 p-2 border border-olive-500 rounded">
                <h3 className="text-xl">{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
            <div className="text-left bg-sky-800 p-2 border border-olive-500 rounded">
                <h4 className="text-xl underline text-center">Address</h4>
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
            </div>
            <Link href="/users" className="btn btn-primary">
                Users
            </Link>
        </div>
    );
};

export default UserDetailsPage;
