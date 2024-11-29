import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl">Login With</h2>
      <div className="*:w-full space-y-2 mt-2">
        <button className="btn text-blue-400 outline outline-blue-400">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn outline">
          <FaGithub></FaGithub> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
