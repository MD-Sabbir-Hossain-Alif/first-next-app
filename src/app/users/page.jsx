import React from "react";

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
                        <div className="card bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.email}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        User Details
                                    </button>
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
