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
        <div className="text-center space-y-2 max-w-md w-full mx-auto bg-purple-900 p-4 rounded-2xl mt-10">
            <h2 className="text-center text-2xl underline">User Details</h2>
            <div className="text-left bg-gray-600 p-2">
                <h3 className="text-xl">{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>
            <div className="text-left bg-gray-500 p-2">
                <h4 className="text-xl underline text-center">Address</h4>
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
            </div>
        </div>
    );
};

export default UserDetailsPage;
