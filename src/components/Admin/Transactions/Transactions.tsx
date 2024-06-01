import useUserStore from "@/src/store/store";

const Transactions = () => {
  const { users } = useUserStore();

  return (
    <div className="bg-bgSoft p-5 md:p-10 rounded-md bg-blue-300">
      <h2 className="mb-6 text-white bg-secondary rounded-md font-extrabold uppercase p-2">Usuarios</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-sm p-3 text-left bg-primary text-white">Name</th>
              <th className="text-sm p-3 text-left bg-primary text-white">Email</th>
              <th className="text-sm p-3 text-left bg-primary text-white">Role</th>
              <th className="text-sm p-3 text-left bg-primary text-white">Phone</th>
              <th className="text-sm p-3 text-left bg-primary text-white">Address</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="text-sm p-3">{user.firstName}</td>
                <td className="text-sm p-3">{user.correo}</td>
                <td className="text-sm p-3">{user.rol.nombre}</td>
                <td className="text-sm p-3">{user.telefono}</td>
                <td className="text-sm p-3">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
