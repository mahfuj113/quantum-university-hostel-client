const ManageUsers = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Subscription status</th>
            </tr>
          </thead>
          {/* <tbody>
            {meal?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.likes}</td>
                <td>{item.reviews}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-lg"
                    onClick={() => handleDeleteItem(item)}
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
