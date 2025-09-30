import UserTable from "../components/Table";

const DEMOUSERS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Lee", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Abi Bee", email: "abibee@dubai.com", role: "Manager", status: "Invited" },
  { id: 4, name: "Kentucky Kenneth", email: "kennethKentuck@burger.com", role: "Staff", status: "Suspended" },
];

export default function UserPage(){
   return(
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
           <section >
              <div>
                <h2 className="text-xl font-semibold mb-4">Users</h2>
                <UserTable users={DEMOUSERS} />
              </div>
            </section>
    </div>
   )
}