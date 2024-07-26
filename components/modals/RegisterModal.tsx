import { FC, useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

const RegisterModal: FC = () => {
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO: ADD REGISTER AND LOGIN

      registerModal.onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        value={email}
        disabled={isLoading}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Name"
        value={name}
        disabled={isLoading}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Username"
        value={username}
        disabled={isLoading}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        disabled={isLoading}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
