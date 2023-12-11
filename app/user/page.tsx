import { Reactions } from "@/components/reactions";
import { UserForm } from "@/components/user-form";
import { createUser } from "@/app/actions";

export default function User() { 

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserForm addUser={createUser} />
			<Reactions />
    </div>
  );
}
