import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="mb-1"><strong>Email:</strong> {email}</p>
      <p>
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}
