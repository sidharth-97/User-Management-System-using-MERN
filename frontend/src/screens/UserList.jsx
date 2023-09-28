import React, { useEffect, useState } from 'react';
import { useBlockMutation, useUserListMutation } from '../slices/adminApiSlice';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [listUser] = useUserListMutation();
  const [userData, setUserData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 

  useEffect(() => {
    const list = async function () {
      try {
        const res = await listUser().unwrap();
        setUserData(res);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    list();
  }, []);

  const [blockUserApiCall] = useBlockMutation();

  const deleteUser = async (userId) => {
    try {
      await blockUserApiCall({ id: userId });
      setUserData((prevData) =>
        prevData.filter((user) => user._id !== userId)
      );
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const filteredUsers = userData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
 <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-start p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-semibold mb-4">User Management</h1>
        <div className="mb-4">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-100 border border-gray-300 rounded-lg p-2.5 w-full"
          />
        </div>
        <div className="mb-4">
          <Link to="/admin/add-user">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Add User
            </button>
          </Link>
        </div>
        <table className="min-w-full text-left text-sm font-light table-auto">
          <thead className="border-b bg-white font-medium">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((item, index) => (
              <tr key={item._id}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    onClick={() => deleteUser(item._id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                  <Link to={`/admin/user-details/${item._id}`}>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 

export default UserList;
