const ServeMeals = () => {
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">Serve Meals</h2>
        {/* <h2 className="text-3xl">Total Users {users.length}</h2> */}
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Subscription Status</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        className="btn btn-sm bg-orange-500 hover:bg-orange-500"
                        onClick={() => handleMakeAdmin(user)}
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-lg"
                      onClick={() => handleDeleteUser(user)}
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServeMeals;
