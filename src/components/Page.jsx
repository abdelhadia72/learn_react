import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Alert from "./Alert";

export default function Page() {
  const [clicked, setCliked] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    password: "",
  });

  const usernameRef = useRef("");
  const emailRef = useRef("");
  const ageRef = useRef("");
  const passRef = useRef("");

  const handleSubmit = (e) => {
    const username = usernameRef?.current.value;
    const email = emailRef.current?.value;
    const age = ageRef.current?.value;
    const password = passRef.current?.value;
    setFormData({
      username,
      email,
      age,
      password,
    });

    setCliked(true);
    console.log(password);
  };

  return (
    <div className="mt-20 flex-col flex items-center justify-center w-screen">
      <div className="w-[300px]">
        <h1 className="text-3xl mb-4">Form</h1>
        {clicked && (
          <div className="messges">
            {formData.username === "" ? (
              <Alert type="error" msg="Warning: Invalid username!" />
            ) : (
              <Alert type="success" msg="Success: valid username" />
            )}
            {formData.email === "" ? (
              <Alert type="error" msg="Warning: Invalid email!" />
            ) : (
              <Alert type="success" msg="Success: valid email" />
            )}
            {formData.age === "" ? (
              <Alert type="error" msg="Warning: Invalid age!" />
            ) : (
              <Alert type="success" msg="Success: valid age" />
            )}
            {formData.password === undefined ? (
              <Alert type="error" msg="Warning: Invalid password!" />
            ) : (
              <Alert type="success" msg="Success: valid password" />
            )}
          </div>
        )}

        <div className="form">
          <Input refs={usernameRef} type="text" holder="Enter Your Username" />
          <Input refs={emailRef} type="email" holder="Enter Your Email" />
          <Input refs={ageRef} type="number" holder="Enter Your Age" />
          <Input ref={passRef} type="text" holder="Enter Your Password" />
          <Button fn={handleSubmit} value="Submit" />
        </div>
      </div>
    </div>
  );
}
